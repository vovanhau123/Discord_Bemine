const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const { clientId, guildId, BOT_TOKEN } = require("../config.js");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const chalk = require("chalk");
const sqlite3 = require("sqlite3").verbose(); // Đảm bảo rằng module sqlite3 đã được require tại đây
const commands = [
  new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Ban một người dùng")
    .addStringOption((option) =>
      option
        .setName("id")
        .setDescription("ID của người dùng Discord cần ban")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("title")
        .setDescription("Tiêu đề thông báo")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("text")
        .setDescription("Nội dung thông báo")
        .setRequired(true)
    )
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription("Kênh để gửi thông báo")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("image").setDescription("URL hình ảnh").setRequired(false)
    )
    .toJSON(),
];

const rest = new REST({ version: "10" }).setToken(BOT_TOKEN);

const registerCommands = async () => {
  try {
    console.log(
      chalk.red(`     _______                           __                             ______   __    __               
    |       \\                         |  \\                           /      \\ |  \\  |  \\              
    | $$$$$$$\\  ______   ______ ____   \\$$ _______    ______        |  $$$$$$\\ \\$$ _| $$_    __    __ 
    | $$__/ $$ /      \\ |      \\    \\ |  \\|       \\  /      \\       | $$   \\$$|  \\|   $$ \\  |  \\  |  \\
    | $$    $$|  $$$$$$\\| $$$$$$\\$$$$\\| $$| $$$$$$$\\|  $$$$$$\\      | $$      | $$ \\$$$$$$  | $$  | $$
    | $$$$$$$\\| $$    $$| $$ | $$ | $$| $$| $$  | $$| $$    $$      | $$   __ | $$  | $$ __ | $$  | $$
    | $$__/ $$| $$$$$$$$| $$ | $$ | $$| $$| $$  | $$| $$$$$$$$      | $$__/  \\| $$  | $$|  \\| $$__/ $$
    | $$    $$ \\$$     \\| $$ | $$ | $$| $$| $$  | $$ \\$$     \\       \\$$    $$| $$   \\$$  $$ \\$$    $$
     \\$$$$$$$   \\$$$$$$$ \\$$  \\$$  \\$$ \\$$ \\$$   \\$$  \\$$$$$$$        \\$$$$$$  \\$$    \\$$$$  _\\$$$$$$$
                                                                                            |  \\__| $$
                                                                                             \\$$    $$
                                                                                              \\$$$$$$ `)
    );
    console.log(chalk.bgRed("Bắt đầu đăng ký lệnh slash (/) với Discord API."));
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands,
    });
    console.log(chalk.bgRed("Lệnh slash (/) đã được đăng ký thành công."));
  } catch (error) {
    console.error(error);
  }
};
// Hàm để kết nối đến cơ sở dữ liệu SQLite
function connectToDatabase(dbPath) {
  return new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error("Error when connecting to the SQLite database", err);
      return null;
    }
    console.log("Connected to the SQLite database.");
    return db;
  });
}
// Hàm để xóa một người dùng từ bảng user_submissions
async function removeFromSQLite(discordId) {
  const dbPath = "../../submissions.db"; // Đảm bảo rằng đường dẫn đến cơ sở dữ liệu SQLite là chính xác
  const db = connectToDatabase(dbPath);
  if (!db) {
    throw new Error("Unable to connect to the SQLite database.");
  }
  return new Promise((resolve, reject) => {
    db.run(
      "DELETE FROM user_submissions WHERE userId = ?",
      [discordId],
      function (error) {
        if (error) {
          reject(error);
        } else {
          resolve(this.changes);
        }
        db.close(); // Đảm bảo rằng cơ sở dữ liệu được đóng sau khi thao tác hoàn tất
      }
    );
  });
}
async function removeFromDatabase(discordId) {
  return new Promise((resolve, reject) => {
    mysqlConnection.query(
      "DELETE FROM whitelist WHERE identifier = ?",
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

async function handleBanCommand(interaction) {
  const discordId = interaction.options.getString("id", true);
  const title = interaction.options.getString("title", true);
  const text = interaction.options.getString("text", true);
  const imageUrl = interaction.options.getString("image");
  const channel = interaction.options.getChannel("channel", true);

  // Attempt to remove the user from the database
  try {
    const results = await removeFromDatabase(`discord:${discordId}`);
    if (results.affectedRows === 0) {
      throw new Error("User not found in database.");
    }
  } catch (error) {
    console.error("Error removing user from the database:", error);
    await interaction.reply({
      content: `Could not remove user from the database: ${error.message}`,
      ephemeral: true,
    });
    return;
  }

  try {
    const results = await removeFromSQLite(discordId);
    if (results === 0) {
      throw new Error("User not found in SQLite database.");
    }
  } catch (error) {
    console.error("Error removing user from the SQLite database:", error);
    await interaction.reply({
      content: `Could not remove user from the SQLite database: ${error.message}`,
      ephemeral: true,
    });
    return;
  }
  // If the user is successfully removed, send the ban notification
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(text)
    .setColor(0xff0000);

  if (imageUrl) embed.setImage(imageUrl);

  await channel.send({ embeds: [embed] });
  await interaction.reply({
    content: `User with ID ${discordId} has been banned and removed from the database.`,
    ephemeral: true,
  });
}

module.exports = { registerCommands, handleBanCommand };
