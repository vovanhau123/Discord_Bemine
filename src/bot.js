const _0x108282 = _0x2956;
(function (_0xf04c74, _0x529216) {
  const _0x44fa4c = _0x2956,
    _0x3acea0 = _0xf04c74();
  while (!![]) {
    try {
      const _0x7e301 =
        (parseInt(_0x44fa4c(0x209)) / 0x1) *
          (-parseInt(_0x44fa4c(0x1cf)) / 0x2) +
        (parseInt(_0x44fa4c(0x1e2)) / 0x3) *
          (parseInt(_0x44fa4c(0x205)) / 0x4) +
        -parseInt(_0x44fa4c(0x1f8)) / 0x5 +
        (parseInt(_0x44fa4c(0x1ff)) / 0x6) *
          (-parseInt(_0x44fa4c(0x1fb)) / 0x7) +
        (-parseInt(_0x44fa4c(0x203)) / 0x8) *
          (parseInt(_0x44fa4c(0x1db)) / 0x9) +
        (-parseInt(_0x44fa4c(0x215)) / 0xa) *
          (parseInt(_0x44fa4c(0x1fa)) / 0xb) +
        (-parseInt(_0x44fa4c(0x218)) / 0xc) *
          (-parseInt(_0x44fa4c(0x21a)) / 0xd);
      if (_0x7e301 === _0x529216) break;
      else _0x3acea0["push"](_0x3acea0["shift"]());
    } catch (_0x3b35a5) {
      _0x3acea0["push"](_0x3acea0["shift"]());
    }
  }
})(_0x1e27, 0x61d39);
const mysql = require("mysql"),
  client = require("./client/botClient"),
  { BOT_TOKEN } = require("./config"),
  readyEvent = require("./events/ready"),
  { registerCommands, handleBanCommand } = require(_0x108282(0x213)),
  interactionCreateEvent = require(_0x108282(0x1e1)),
  {
    InteractionType,
    PermissionFlagsBits,
    EmbedBuilder,
    ChannelType,
  } = require("discord.js"),
  path = require(_0x108282(0x1f5)),
  sqlite3 = require("sqlite3")["verbose"](),
  chalk = require(_0x108282(0x204)),
  mysqlConnection = mysql[_0x108282(0x1fe)]({
    host: _0x108282(0x1f2),
    user: "root",
    password: "",
    database: _0x108282(0x1d9),
  });
function _0x2956(_0x1fce5f, _0x16fe76) {
  const _0x1e2711 = _0x1e27();
  return (
    (_0x2956 = function (_0x29567a, _0x36fc7e) {
      _0x29567a = _0x29567a - 0x1c2;
      let _0xcb138e = _0x1e2711[_0x29567a];
      return _0xcb138e;
    }),
    _0x2956(_0x1fce5f, _0x16fe76)
  );
}
mysqlConnection[_0x108282(0x1eb)]((_0x54eb4c) => {
  const _0x3c77f0 = _0x108282;
  if (_0x54eb4c) {
    console["error"](_0x3c77f0(0x217), _0x54eb4c);
    return;
  }
  console[_0x3c77f0(0x1e0)](
    chalk[_0x3c77f0(0x1ef)]("Kết\x20nối\x20thành\x20công\x20đến\x20MySQL!")
  );
}),
  readyEvent(client);
function _0x1e27() {
  const _0x17381c = [
    "deferReply",
    "createConnection",
    "6TZmKOU",
    "\x20trong\x20cơ\x20sở\x20dữ\x20liệu\x20MySQL.",
    "fetch",
    "Rows\x20affected:\x20",
    "56ETIKVH",
    "chalk",
    "1104956PVjgcU",
    "channel",
    "Không\x20tìm\x20thấy\x20người\x20dùng\x20với\x20ID\x20",
    "options",
    "1cqsnHS",
    "position",
    "roles",
    "\x0a```",
    "**Lý\x20Do:**\x20\x0a```\x0a",
    "image",
    "Error\x20when\x20connecting\x20to\x20the\x20SQLite\x20database",
    "type",
    "has",
    "\x20đã\x20bị\x20cấm\x20và\x20thông\x20báo\x20đã\x20được\x20gửi.",
    "./events/messageCreate",
    "login",
    "6834310CPautF",
    "Error\x20starting\x20the\x20bot:",
    "Không\x20thể\x20kết\x20nối\x20đến\x20MySQL:",
    "12zhSTGV",
    "\x20với\x20ID\x20",
    "22379929tKOJaw",
    "ManageRoles",
    "addFields",
    "highest",
    "\x20trong\x20SQLite\x20database.",
    "permissions",
    "editReply",
    "ban",
    "title",
    "members",
    "setImage",
    "OPEN_READWRITE",
    "Error\x20executing\x20DELETE\x20query:",
    "Unable\x20to\x20connect\x20to\x20the\x20SQLite\x20database.",
    "308738VySgiR",
    "discord:",
    "setDescription",
    "Kênh\x20đã\x20chọn\x20không\x20phải\x20là\x20kênh\x20văn\x20bản\x20của\x20máy\x20chủ.",
    "interactionCreate",
    "Người\x20dùng\x20",
    "DELETE\x20FROM\x20user_submissions\x20WHERE\x20userId\x20=\x20?",
    "guild",
    "Database",
    "Error\x20closing\x20SQLite\x20database",
    "beminecity",
    "tag",
    "548901WyAPrp",
    "DELETE\x20FROM\x20whitelist\x20WHERE\x20identifier\x20=\x20?",
    "Lệnh\x20này\x20chỉ\x20có\x20thể\x20được\x20sử\x20dụng\x20trong\x20một\x20máy\x20chủ.",
    "Không\x20tìm\x20thấy\x20người\x20dùng\x20nào\x20với\x20ID\x20",
    "changes",
    "log",
    "./events/interactionCreate",
    "3oCsfTH",
    "run",
    "Bot\x20không\x20có\x20quyền\x20quản\x20lý\x20vai\x20trò\x20(MANAGE_ROLES).",
    "error",
    "affectedRows",
    "\x20trong\x20máy\x20chủ\x20này.",
    "setColor",
    "setTitle",
    "@everyone",
    "connect",
    "Đã\x20xảy\x20ra\x20lỗi\x20khi\x20xử\x20lý\x20lệnh\x20của\x20bạn.",
    "reply",
    "resolve",
    "bgRed",
    "getString",
    "finally",
    "localhost",
    "query",
    "Lỗi\x20khi\x20xử\x20lý\x20tương\x20tác:",
    "path",
    "GuildText",
    "text",
    "414095SUgzZN",
    "../submissions.db",
    "11pIDxeB",
    "1746731ltAZsB",
    "remove",
  ];
  _0x1e27 = function () {
    return _0x17381c;
  };
  return _0x1e27();
}
async function removeFromDatabase(_0xa5e4e8) {
  return new Promise((_0x587507, _0x1f49f1) => {
    const _0xf5d21c = _0x2956;
    mysqlConnection[_0xf5d21c(0x1f3)](
      _0xf5d21c(0x1dc),
      [_0xa5e4e8],
      (_0x441323, _0x4e41ae) => {
        if (_0x441323) return _0x1f49f1(_0x441323);
        _0x587507(_0x4e41ae);
      }
    );
  });
}
function connectToDatabase(_0x5a8ed4) {
  const _0x18b9e6 = _0x108282;
  return new sqlite3[_0x18b9e6(0x1d7)](
    _0x5a8ed4,
    sqlite3[_0x18b9e6(0x1cc)],
    (_0x14ed1f) => {
      const _0x21206d = _0x18b9e6;
      if (_0x14ed1f) {
        console[_0x21206d(0x1e5)](_0x21206d(0x20f), _0x14ed1f);
        return;
      }
      console[_0x21206d(0x1e0)](
        "Connected\x20to\x20the\x20SQLite\x20database."
      );
    }
  );
}
async function removeFromSQLite(_0x1d39b4) {
  const _0x4f3b22 = _0x108282,
    _0x280f65 = path[_0x4f3b22(0x1ee)](__dirname, _0x4f3b22(0x1f9)),
    _0x599720 = connectToDatabase(_0x280f65);
  if (!_0x599720) throw new Error(_0x4f3b22(0x1ce));
  return new Promise((_0x563312, _0x23b9d5) => {
    const _0x231079 = _0x4f3b22;
    _0x599720[_0x231079(0x1e3)](
      _0x231079(0x1d5),
      [_0x1d39b4],
      function (_0x3037d6) {
        const _0x2ea826 = _0x231079;
        _0x3037d6
          ? (console["error"](_0x2ea826(0x1cd), _0x3037d6),
            _0x23b9d5(_0x3037d6))
          : (console[_0x2ea826(0x1e0)](
              _0x2ea826(0x202) + this[_0x2ea826(0x1df)]
            ),
            _0x563312(this[_0x2ea826(0x1df)]));
      }
    );
  })[_0x4f3b22(0x1f1)](() => {
    _0x599720["close"]((_0x150cfb) => {
      const _0x5b073c = _0x2956;
      _0x150cfb && console[_0x5b073c(0x1e5)](_0x5b073c(0x1d8), _0x150cfb);
    });
  });
}
client["on"](_0x108282(0x1d3), async (_0x46e56a) => {
  const _0x5ebcd9 = _0x108282;
  if (_0x46e56a[_0x5ebcd9(0x210)] !== InteractionType["ApplicationCommand"])
    return;
  if (_0x46e56a["commandName"] === _0x5ebcd9(0x1c8)) {
    if (!_0x46e56a[_0x5ebcd9(0x1d6)]) {
      await _0x46e56a[_0x5ebcd9(0x1ed)]({
        content: _0x5ebcd9(0x1dd),
        ephemeral: !![],
      });
      return;
    }
    if (
      !_0x46e56a[_0x5ebcd9(0x1d6)]["members"]["me"][_0x5ebcd9(0x1c6)][
        _0x5ebcd9(0x211)
      ](PermissionFlagsBits[_0x5ebcd9(0x1c2)])
    ) {
      console[_0x5ebcd9(0x1e5)](_0x5ebcd9(0x1e4));
      return;
    }
    await _0x46e56a[_0x5ebcd9(0x1fd)]({ ephemeral: !![] });
    const _0x38700f = _0x46e56a[_0x5ebcd9(0x208)]["getString"]("id", !![]),
      _0xcb328 = _0x46e56a[_0x5ebcd9(0x208)][_0x5ebcd9(0x1f0)](
        _0x5ebcd9(0x1c9)
      ),
      _0x458954 = _0x46e56a[_0x5ebcd9(0x208)][_0x5ebcd9(0x1f0)](
        _0x5ebcd9(0x1f7)
      ),
      _0x2d7f7d = _0x46e56a[_0x5ebcd9(0x208)][_0x5ebcd9(0x1f0)](
        _0x5ebcd9(0x20e)
      ),
      _0x20303b = _0x46e56a[_0x5ebcd9(0x208)]["getChannel"](_0x5ebcd9(0x206)),
      _0x2d2ded = await _0x46e56a[_0x5ebcd9(0x1d6)]["members"][
        _0x5ebcd9(0x201)
      ](_0x38700f);
    if (!_0x2d2ded) {
      await _0x46e56a[_0x5ebcd9(0x1c7)]({
        content: _0x5ebcd9(0x1de) + _0x38700f + _0x5ebcd9(0x1e7),
      });
      return;
    }
    if (
      _0x2d2ded[_0x5ebcd9(0x20b)][_0x5ebcd9(0x1c4)][_0x5ebcd9(0x20a)] >=
      _0x46e56a[_0x5ebcd9(0x1d6)][_0x5ebcd9(0x1ca)]["me"][_0x5ebcd9(0x20b)][
        "highest"
      ][_0x5ebcd9(0x20a)]
    ) {
      await _0x46e56a[_0x5ebcd9(0x1c7)]({
        content:
          "Bạn\x20không\x20thể\x20quản\x20lý\x20vai\x20trò\x20cho\x20người\x20dùng\x20này\x20vì\x20họ\x20có\x20vai\x20trò\x20cao\x20hơn\x20hoặc\x20bằng\x20với\x20bot.",
      });
      return;
    }
    try {
      const _0x5c9cb7 = await removeFromSQLite(_0x38700f);
      if (_0x5c9cb7 === 0x0) {
        await _0x46e56a[_0x5ebcd9(0x1c7)]({
          content: _0x5ebcd9(0x207) + _0x38700f + _0x5ebcd9(0x1c5),
        });
        return;
      }
      const _0x93484a = await removeFromDatabase(_0x5ebcd9(0x1d0) + _0x38700f);
      if (_0x93484a[_0x5ebcd9(0x1e6)] === 0x0) {
        await _0x46e56a["editReply"]({
          content: _0x5ebcd9(0x1de) + _0x38700f + _0x5ebcd9(0x200),
        });
        return;
      }
      await _0x2d2ded["roles"][_0x5ebcd9(0x1fc)](_0x2d2ded["roles"]["cache"]);
      const _0x5902d1 = _0x2d2ded["user"][_0x5ebcd9(0x1da)],
        _0x4635b4 = _0x5ebcd9(0x20d) + _0x458954 + _0x5ebcd9(0x20c),
        _0x28ff62 = new EmbedBuilder()
          [_0x5ebcd9(0x1e8)](0xff00)
          [_0x5ebcd9(0x1e9)](_0xcb328)
          [_0x5ebcd9(0x1d1)](_0x4635b4)
          [_0x5ebcd9(0x1c3)]({
            name: "User\x20Discord\x20Banned",
            value: ">\x20" + _0x5902d1,
          });
      if (_0x2d7f7d) _0x28ff62[_0x5ebcd9(0x1cb)](_0x2d7f7d);
      _0x20303b && _0x20303b[_0x5ebcd9(0x210)] === ChannelType[_0x5ebcd9(0x1f6)]
        ? await _0x20303b["send"]({
            content: _0x5ebcd9(0x1ea),
            embeds: [_0x28ff62],
          })
        : await _0x46e56a["followUp"]({
            content: _0x5ebcd9(0x1d2),
            ephemeral: !![],
          }),
        await _0x46e56a[_0x5ebcd9(0x1c7)]({
          content:
            _0x5ebcd9(0x1d4) +
            _0x5902d1 +
            _0x5ebcd9(0x219) +
            _0x38700f +
            _0x5ebcd9(0x212),
        });
    } catch (_0x2451eb) {
      console[_0x5ebcd9(0x1e5)](_0x5ebcd9(0x1f4), _0x2451eb),
        await _0x46e56a[_0x5ebcd9(0x1c7)]({ content: _0x5ebcd9(0x1ec) });
    }
  }
});
const start = async () => {
  const _0xa16c3b = _0x108282;
  try {
    await registerCommands(client)["catch"](console[_0xa16c3b(0x1e5)]),
      interactionCreateEvent(client),
      await client[_0xa16c3b(0x214)](BOT_TOKEN)["catch"](console["error"]);
  } catch (_0x3bedd9) {
    console[_0xa16c3b(0x1e5)](_0xa16c3b(0x216), _0x3bedd9);
  }
};
module["exports"] = { start: start, mysqlConnection: mysqlConnection };
