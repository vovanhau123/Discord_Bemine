const mysql = require("mysql");
const client = require("./client/botClient");
const { BOT_TOKEN } = require("./config");
const readyEvent = require("./events/ready");
const {
  registerCommands,
  handleBanCommand,
} = require("./events/messageCreate");
const interactionCreateEvent = require("./events/interactionCreate");
const {
  InteractionType,
  PermissionFlagsBits,
  EmbedBuilder,
  ChannelType,
} = require("discord.js");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
// Tạo kết nối MySQL
const chalk = require("chalk");
const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "beminecity",
});

// Kết nối với MySQL
mysqlConnection.connect((error) => {
  if (error) {
    console.error("Không thể kết nối đến MySQL:", error);
    return;
  }
  console.log(chalk.bgRed("Kết nối thành công đến MySQL!"));
});

// Sự kiện khi bot sẵn sàng
readyEvent(client);
async function removeFromDatabase(discordId) {
  return new Promise((resolve, reject) => {
    mysqlConnection.query(
      "DELETE FROM whitelisted_players WHERE discord_id = ?",
      [discordId],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      }
    );
  });
}

function connectToDatabase(dbPath) {
  return new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error("Error when connecting to the SQLite database", err);
      return;
    }
    console.log("Connected to the SQLite database.");
  });
}

async function removeFromSQLite(userId) {
  const dbPath = path.resolve(__dirname, "../submissions.db");
  const db = connectToDatabase(dbPath);
  if (!db) {
    throw new Error("Unable to connect to the SQLite database.");
  }

  return new Promise((resolve, reject) => {
    db.run(
      "DELETE FROM user_submissions WHERE userId = ?",
      [userId],
      function (error) {
        if (error) {
          console.error("Error executing DELETE query:", error);
          reject(error);
        } else {
          console.log(`Rows affected: ${this.changes}`);
          resolve(this.changes);
        }
      }
    );
  }).finally(() => {
    db.close((err) => {
      if (err) {
        console.error("Error closing SQLite database", err);
      }
    });
  });
}
client.on("interactionCreate", async (interaction) => {
  if (interaction.type !== InteractionType.ApplicationCommand) return;

  if (interaction.commandName === "ban") {
    if (!interaction.guild) {
      await interaction.reply({
        content: "Lệnh này chỉ có thể được sử dụng trong một máy chủ.",
        ephemeral: true,
      });
      return;
    }

    if (
      !interaction.guild.members.me.permissions.has(
        PermissionFlagsBits.ManageRoles
      )
    ) {
      console.error("Bot không có quyền quản lý vai trò (MANAGE_ROLES).");
      return;
    }

    await interaction.deferReply({ ephemeral: true });

    const discordId = interaction.options.getString("id", true);
    const title = interaction.options.getString("title");
    const text = interaction.options.getString("text");
    const imageUrl = interaction.options.getString("image");
    const channelOption = interaction.options.getChannel("channel");

    const member = await interaction.guild.members.fetch(discordId);

    if (!member) {
      await interaction.editReply({
        content: `Không tìm thấy người dùng nào với ID ${discordId} trong máy chủ này.`,
      });
      return;
    }

    if (
      member.roles.highest.position >=
      interaction.guild.members.me.roles.highest.position
    ) {
      await interaction.editReply({
        content:
          "Bạn không thể quản lý vai trò cho người dùng này vì họ có vai trò cao hơn hoặc bằng với bot.",
      });
      return;
    }

    try {
      const sqliteResults = await removeFromSQLite(discordId);
      if (sqliteResults === 0) {
        await interaction.editReply({
          content: `Không tìm thấy người dùng với ID ${discordId} trong SQLite database.`,
        });
        return;
      }

      const results = await removeFromDatabase(`discord:${discordId}`);
      if (results.affectedRows === 0) {
        await interaction.editReply({
          content: `Không tìm thấy người dùng nào với ID ${discordId} trong cơ sở dữ liệu MySQL.`,
        });
        return;
      }

      await member.roles.remove(member.roles.cache);

      const userTag = member.user.tag;
      const titleWithReason = `**Lý Do:** \n\`\`\`\n${text}\n\`\`\``;
      const embed = new EmbedBuilder()
        .setColor(0x00ff00)
        .setTitle(title)
        .setDescription(titleWithReason)
        .addFields({ name: "User Discord Banned", value: `> ${userTag}` });

      if (imageUrl) embed.setImage(imageUrl);

      if (channelOption && channelOption.type === ChannelType.GuildText) {
        await channelOption.send({ content: "@everyone", embeds: [embed] });
      } else {
        await interaction.followUp({
          content: "Kênh đã chọn không phải là kênh văn bản của máy chủ.",
          ephemeral: true,
        });
      }

      await interaction.editReply({
        content: `Người dùng ${userTag} với ID ${discordId} đã bị cấm và thông báo đã được gửi.`,
      });
    } catch (error) {
      console.error("Lỗi khi xử lý tương tác:", error);
      await interaction.editReply({
        content: "Đã xảy ra lỗi khi xử lý lệnh của bạn.",
      });
    }
  }
});
// Hàm khởi động bot
const start = async () => {
  try {
    // Đăng ký lệnh với API của Discord
    await registerCommands(client).catch(console.error);
    // Bắt sự kiện tương tác khi bot nhận được lệnh
    interactionCreateEvent(client);
    // Đăng nhập bot
    await client.login(BOT_TOKEN).catch(console.error);
  } catch (error) {
    console.error("Error starting the bot:", error);
  }
};

module.exports = { start, mysqlConnection };
