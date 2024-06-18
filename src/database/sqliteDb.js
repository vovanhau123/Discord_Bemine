const sqlite3 = require("sqlite3").verbose();
const { DATABASE_PATH } = require("../config");
const chalk = require("chalk");
const db = new sqlite3.Database(
  DATABASE_PATH,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error("Không thể kết nối đến cơ sở dữ liệu SQLite:", err.message);
    } else {
      console.log(chalk.bgRed("Kết nối thành công đến cơ sở dữ liệu SQLite."));

      // Tạo bảng user_submissions nếu không tồn tại
      db.run(
        `CREATE TABLE IF NOT EXISTS user_submissions (
            userId TEXT PRIMARY KEY,
            name TEXT,
            age INTEGER,
            gender TEXT,
            steam TEXT,
            nameDis TEXT
        )`,
        (err) => {
          if (err) {
            console.error("Lỗi khi tạo bảng user_submissions:", err.message);
          } else {
            console.log(chalk.bgRed(
              "Bảng user_submissions đã được tạo hoặc cập nhật thành công."
            ));
          }
        }
      );

      // Tạo bảng BotStatus nếu không tồn tại
      db.run(
        "CREATE TABLE IF NOT EXISTS BotStatus (id TEXT PRIMARY KEY, messageSent BOOLEAN)",
        (err) => {
          if (err) {
            console.error("Lỗi khi tạo bảng BotStatus:", err.message);
          } else {
            console.log(chalk.bgRed("Bảng BotStatus đã được tạo hoặc cập nhật thành công."));
          }
        }
      );
    }
  }
);

module.exports = db;
