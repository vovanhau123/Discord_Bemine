const _0xa60309 = _0x3cab;
(function (_0x165f25, _0x5e22b3) {
  const _0x57f373 = _0x3cab,
    _0x28eb6b = _0x165f25();
  while (!![]) {
    try {
      const _0x459ef9 =
        -parseInt(_0x57f373(0xc6)) / 0x1 +
        (-parseInt(_0x57f373(0xc2)) / 0x2) * (parseInt(_0x57f373(0xb9)) / 0x3) +
        parseInt(_0x57f373(0xcf)) / 0x4 +
        parseInt(_0x57f373(0xbd)) / 0x5 +
        parseInt(_0x57f373(0xc3)) / 0x6 +
        parseInt(_0x57f373(0xc1)) / 0x7 +
        (-parseInt(_0x57f373(0xc7)) / 0x8) * (-parseInt(_0x57f373(0xc5)) / 0x9);
      if (_0x459ef9 === _0x5e22b3) break;
      else _0x28eb6b["push"](_0x28eb6b["shift"]());
    } catch (_0x31c3b7) {
      _0x28eb6b["push"](_0x28eb6b["shift"]());
    }
  }
})(_0x576d, 0x2efb5);
function _0x3cab(_0x367918, _0x561ddb) {
  const _0x576da1 = _0x576d();
  return (
    (_0x3cab = function (_0x3cab3c, _0x23ba68) {
      _0x3cab3c = _0x3cab3c - 0xb8;
      let _0x2efb06 = _0x576da1[_0x3cab3c];
      return _0x2efb06;
    }),
    _0x3cab(_0x367918, _0x561ddb)
  );
}
const sqlite3 = require(_0xa60309(0xce))[_0xa60309(0xd2)](),
  { DATABASE_PATH } = require(_0xa60309(0xcc)),
  chalk = require("chalk"),
  db = new sqlite3[_0xa60309(0xc9)](
    DATABASE_PATH,
    sqlite3[_0xa60309(0xba)] | sqlite3["OPEN_CREATE"],
    (_0x3c5919) => {
      const _0x3b4f38 = _0xa60309;
      _0x3c5919
        ? console[_0x3b4f38(0xc0)](
            "Không\x20thể\x20kết\x20nối\x20đến\x20cơ\x20sở\x20dữ\x20liệu\x20SQLite:",
            _0x3c5919[_0x3b4f38(0xb8)]
          )
        : (console[_0x3b4f38(0xca)](chalk[_0x3b4f38(0xbe)](_0x3b4f38(0xd0))),
          db[_0x3b4f38(0xc8)](_0x3b4f38(0xbf), (_0x5120f2) => {
            const _0x5542be = _0x3b4f38;
            _0x5120f2
              ? console[_0x5542be(0xc0)](
                  _0x5542be(0xcd),
                  _0x5120f2[_0x5542be(0xb8)]
                )
              : console[_0x5542be(0xca)](
                  chalk[_0x5542be(0xbe)](_0x5542be(0xbc))
                );
          }),
          db[_0x3b4f38(0xc8)](_0x3b4f38(0xbb), (_0x30e077) => {
            const _0x44e759 = _0x3b4f38;
            _0x30e077
              ? console["error"](_0x44e759(0xc4), _0x30e077[_0x44e759(0xb8)])
              : console["log"](chalk[_0x44e759(0xbe)](_0x44e759(0xd1)));
          }));
    }
  );
function _0x576d() {
  const _0x10dd0a = [
    "72XhfBgq",
    "168586Mrselj",
    "13632zLrdbc",
    "run",
    "Database",
    "log",
    "exports",
    "../config",
    "Lỗi\x20khi\x20tạo\x20bảng\x20user_submissions:",
    "sqlite3",
    "156612vzrROT",
    "Kết\x20nối\x20thành\x20công\x20đến\x20cơ\x20sở\x20dữ\x20liệu\x20SQLite.",
    "Bảng\x20BotStatus\x20đã\x20được\x20tạo\x20hoặc\x20cập\x20nhật\x20thành\x20công.",
    "verbose",
    "message",
    "39021nxWznc",
    "OPEN_READWRITE",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20BotStatus\x20(id\x20TEXT\x20PRIMARY\x20KEY,\x20messageSent\x20BOOLEAN)",
    "Bảng\x20user_submissions\x20đã\x20được\x20tạo\x20hoặc\x20cập\x20nhật\x20thành\x20công.",
    "1580080dfBIEN",
    "bgRed",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20user_submissions\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20userId\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20name\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20age\x20INTEGER,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gender\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20steam\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20nameDis\x20TEXT\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
    "error",
    "2393755yhIVTD",
    "58IDmODd",
    "164760NCTbMa",
    "Lỗi\x20khi\x20tạo\x20bảng\x20BotStatus:",
  ];
  _0x576d = function () {
    return _0x10dd0a;
  };
  return _0x576d();
}
module[_0xa60309(0xcb)] = db;
