const _0x744f0e = _0x4a86;
(function (_0x2ab298, _0x26169e) {
  const _0x184a1e = _0x4a86,
    _0x5005f2 = _0x2ab298();
  while (!![]) {
    try {
      const _0x8d4a95 =
        (-parseInt(_0x184a1e(0x1b8)) / 0x1) *
          (-parseInt(_0x184a1e(0x195)) / 0x2) +
        parseInt(_0x184a1e(0x1bc)) / 0x3 +
        -parseInt(_0x184a1e(0x1c4)) / 0x4 +
        -parseInt(_0x184a1e(0x1b7)) / 0x5 +
        parseInt(_0x184a1e(0x1c8)) / 0x6 +
        (-parseInt(_0x184a1e(0x1d0)) / 0x7) *
          (parseInt(_0x184a1e(0x190)) / 0x8) +
        (-parseInt(_0x184a1e(0x19b)) / 0x9) *
          (-parseInt(_0x184a1e(0x1be)) / 0xa);
      if (_0x8d4a95 === _0x26169e) break;
      else _0x5005f2["push"](_0x5005f2["shift"]());
    } catch (_0x309bbd) {
      _0x5005f2["push"](_0x5005f2["shift"]());
    }
  }
})(_0x59ef, 0x8aebc);
function _0x4a86(_0xdbf85b, _0x18c327) {
  const _0x59ef21 = _0x59ef();
  return (
    (_0x4a86 = function (_0x4a8613, _0x401770) {
      _0x4a8613 = _0x4a8613 - 0x190;
      let _0x54158b = _0x59ef21[_0x4a8613];
      return _0x54158b;
    }),
    _0x4a86(_0xdbf85b, _0x18c327)
  );
}
const { REST } = require(_0x744f0e(0x19d)),
  { Routes } = require(_0x744f0e(0x1cf)),
  { clientId, guildId, BOT_TOKEN } = require(_0x744f0e(0x1ba)),
  { SlashCommandBuilder, EmbedBuilder } = require(_0x744f0e(0x1b5)),
  chalk = require(_0x744f0e(0x1bb)),
  sqlite3 = require(_0x744f0e(0x192))[_0x744f0e(0x1b2)](),
  commands = [
    new SlashCommandBuilder()
      [_0x744f0e(0x1b0)](_0x744f0e(0x1a2))
      [_0x744f0e(0x1b1)](_0x744f0e(0x1a7))
      [_0x744f0e(0x1a1)]((_0x20e15b) =>
        _0x20e15b[_0x744f0e(0x1b0)]("id")
          [_0x744f0e(0x1b1)](_0x744f0e(0x1c0))
          [_0x744f0e(0x1b4)](!![])
      )
      [_0x744f0e(0x1a1)]((_0x5bf539) =>
        _0x5bf539[_0x744f0e(0x1b0)](_0x744f0e(0x1b3))
          [_0x744f0e(0x1b1)]("Tiêu\x20đề\x20thông\x20báo")
          [_0x744f0e(0x1b4)](!![])
      )
      [_0x744f0e(0x1a1)]((_0x5e005b) =>
        _0x5e005b[_0x744f0e(0x1b0)](_0x744f0e(0x1a4))
          ["setDescription"](_0x744f0e(0x1a9))
          [_0x744f0e(0x1b4)](!![])
      )
      [_0x744f0e(0x191)]((_0x4ac3f8) =>
        _0x4ac3f8["setName"](_0x744f0e(0x19a))
          [_0x744f0e(0x1b1)](_0x744f0e(0x1a5))
          [_0x744f0e(0x1b4)](!![])
      )
      ["addStringOption"]((_0x20440c) =>
        _0x20440c[_0x744f0e(0x1b0)]("image")
          [_0x744f0e(0x1b1)](_0x744f0e(0x19f))
          ["setRequired"](![])
      )
      [_0x744f0e(0x19e)](),
  ],
  rest = new REST({ version: "10" })[_0x744f0e(0x1c5)](BOT_TOKEN),
  registerCommands = async () => {
    const _0x1b5e74 = _0x744f0e;
    try {
      console[_0x1b5e74(0x1bd)](chalk[_0x1b5e74(0x1ab)](_0x1b5e74(0x1a8))),
        console[_0x1b5e74(0x1bd)](
          chalk["bgRed"](
            "Bắt\x20đầu\x20đăng\x20ký\x20lệnh\x20slash\x20(/)\x20với\x20Discord\x20API."
          )
        ),
        await rest[_0x1b5e74(0x196)](
          Routes[_0x1b5e74(0x1cc)](clientId, guildId),
          { body: commands }
        ),
        console[_0x1b5e74(0x1bd)](
          chalk["bgRed"](
            "Lệnh\x20slash\x20(/)\x20đã\x20được\x20đăng\x20ký\x20thành\x20công."
          )
        );
    } catch (_0x3456aa) {
      console[_0x1b5e74(0x1c1)](_0x3456aa);
    }
  };
function connectToDatabase(_0x5088ff) {
  const _0x9b3101 = _0x744f0e;
  return new sqlite3[_0x9b3101(0x1c6)](
    _0x5088ff,
    sqlite3["OPEN_READWRITE"],
    (_0x4a40ab) => {
      const _0x368d51 = _0x9b3101;
      if (_0x4a40ab) return console["error"](_0x368d51(0x1cd), _0x4a40ab), null;
      return console[_0x368d51(0x1bd)](_0x368d51(0x197)), db;
    }
  );
}
async function removeFromSQLite(_0x489845) {
  const _0x4a16a0 = _0x744f0e,
    _0x46018e = _0x4a16a0(0x1b6),
    _0x4ab26d = connectToDatabase(_0x46018e);
  if (!_0x4ab26d) throw new Error(_0x4a16a0(0x19c));
  return new Promise((_0x2c9ba3, _0x6c83cb) => {
    const _0x131bed = _0x4a16a0;
    _0x4ab26d[_0x131bed(0x1b9)](
      _0x131bed(0x1af),
      [_0x489845],
      function (_0x3e6408) {
        const _0x1819aa = _0x131bed;
        _0x3e6408 ? _0x6c83cb(_0x3e6408) : _0x2c9ba3(this[_0x1819aa(0x1a6)]),
          _0x4ab26d[_0x1819aa(0x1aa)]();
      }
    );
  });
}
async function removeFromDatabase(_0x2b8928) {
  return new Promise((_0x4cf67b, _0x1eb7b8) => {
    const _0x312cc8 = _0x4a86;
    mysqlConnection[_0x312cc8(0x1ca)](
      _0x312cc8(0x1cb),
      [_0x2b8928],
      (_0x42d819, _0xca4e58) => {
        if (_0x42d819) return _0x1eb7b8(_0x42d819);
        _0x4cf67b(_0xca4e58);
      }
    );
  });
}
async function handleBanCommand(_0x3f2e66) {
  const _0x145fe6 = _0x744f0e,
    _0x57e66a = _0x3f2e66[_0x145fe6(0x1ad)][_0x145fe6(0x198)]("id", !![]),
    _0x28d8b4 = _0x3f2e66["options"][_0x145fe6(0x198)](_0x145fe6(0x1b3), !![]),
    _0x1cb6f7 = _0x3f2e66[_0x145fe6(0x1ad)][_0x145fe6(0x198)](
      _0x145fe6(0x1a4),
      !![]
    ),
    _0x5bd9be = _0x3f2e66[_0x145fe6(0x1ad)]["getString"](_0x145fe6(0x199)),
    _0x10dd12 = _0x3f2e66[_0x145fe6(0x1ad)][_0x145fe6(0x1bf)]("channel", !![]);
  try {
    const _0x472750 = await removeFromDatabase("discord:" + _0x57e66a);
    if (_0x472750["affectedRows"] === 0x0) throw new Error(_0x145fe6(0x1c3));
  } catch (_0x5b474b) {
    console["error"](_0x145fe6(0x193), _0x5b474b),
      await _0x3f2e66[_0x145fe6(0x1a3)]({
        content: _0x145fe6(0x1c9) + _0x5b474b[_0x145fe6(0x194)],
        ephemeral: !![],
      });
    return;
  }
  try {
    const _0x490871 = await removeFromSQLite(_0x57e66a);
    if (_0x490871 === 0x0) throw new Error(_0x145fe6(0x1a0));
  } catch (_0x2e59aa) {
    console[_0x145fe6(0x1c1)](
      "Error\x20removing\x20user\x20from\x20the\x20SQLite\x20database:",
      _0x2e59aa
    ),
      await _0x3f2e66[_0x145fe6(0x1a3)]({
        content: _0x145fe6(0x1c2) + _0x2e59aa[_0x145fe6(0x194)],
        ephemeral: !![],
      });
    return;
  }
  const _0x1e699a = new EmbedBuilder()
    [_0x145fe6(0x1ac)](_0x28d8b4)
    [_0x145fe6(0x1b1)](_0x1cb6f7)
    ["setColor"](0xff0000);
  if (_0x5bd9be) _0x1e699a[_0x145fe6(0x1ae)](_0x5bd9be);
  await _0x10dd12["send"]({ embeds: [_0x1e699a] }),
    await _0x3f2e66[_0x145fe6(0x1a3)]({
      content:
        _0x145fe6(0x1c7) +
        _0x57e66a +
        "\x20has\x20been\x20banned\x20and\x20removed\x20from\x20the\x20database.",
      ephemeral: !![],
    });
}
function _0x59ef() {
  const _0x450fc3 = [
    "1021276pHdfty",
    "setToken",
    "Database",
    "User\x20with\x20ID\x20",
    "880008hkFurx",
    "Could\x20not\x20remove\x20user\x20from\x20the\x20database:\x20",
    "query",
    "DELETE\x20FROM\x20whitelist\x20WHERE\x20identifier\x20=\x20?",
    "applicationGuildCommands",
    "Error\x20when\x20connecting\x20to\x20the\x20SQLite\x20database",
    "exports",
    "discord-api-types/v10",
    "280usTYWX",
    "30928RyFayr",
    "addChannelOption",
    "sqlite3",
    "Error\x20removing\x20user\x20from\x20the\x20database:",
    "message",
    "621726yxnEiS",
    "put",
    "Connected\x20to\x20the\x20SQLite\x20database.",
    "getString",
    "image",
    "channel",
    "1890351BJlUrs",
    "Unable\x20to\x20connect\x20to\x20the\x20SQLite\x20database.",
    "@discordjs/rest",
    "toJSON",
    "URL\x20hình\x20ảnh",
    "User\x20not\x20found\x20in\x20SQLite\x20database.",
    "addStringOption",
    "ban",
    "reply",
    "text",
    "Kênh\x20để\x20gửi\x20thông\x20báo",
    "changes",
    "Ban\x20một\x20người\x20dùng",
    "\x20\x20\x20\x20\x20_______\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20__\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20______\x20\x20\x20__\x20\x20\x20\x20__\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20|\x20\x20\x20\x20\x20\x20\x20\x5c\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20\x20\x5c\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/\x20\x20\x20\x20\x20\x20\x5c\x20|\x20\x20\x5c\x20\x20|\x20\x20\x5c\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20|\x20$$$$$$$\x5c\x20\x20______\x20\x20\x20______\x20____\x20\x20\x20\x5c$$\x20_______\x20\x20\x20\x20______\x20\x20\x20\x20\x20\x20\x20\x20|\x20\x20$$$$$$\x5c\x20\x5c$$\x20_|\x20$$_\x20\x20\x20\x20__\x20\x20\x20\x20__\x20\x0a\x20\x20\x20\x20|\x20$$__/\x20$$\x20/\x20\x20\x20\x20\x20\x20\x5c\x20|\x20\x20\x20\x20\x20\x20\x5c\x20\x20\x20\x20\x5c\x20|\x20\x20\x5c|\x20\x20\x20\x20\x20\x20\x20\x5c\x20\x20/\x20\x20\x20\x20\x20\x20\x5c\x20\x20\x20\x20\x20\x20\x20|\x20$$\x20\x20\x20\x5c$$|\x20\x20\x5c|\x20\x20\x20$$\x20\x5c\x20\x20|\x20\x20\x5c\x20\x20|\x20\x20\x5c\x0a\x20\x20\x20\x20|\x20$$\x20\x20\x20\x20$$|\x20\x20$$$$$$\x5c|\x20$$$$$$\x5c$$$$\x5c|\x20$$|\x20$$$$$$$\x5c|\x20\x20$$$$$$\x5c\x20\x20\x20\x20\x20\x20|\x20$$\x20\x20\x20\x20\x20\x20|\x20$$\x20\x5c$$$$$$\x20\x20|\x20$$\x20\x20|\x20$$\x0a\x20\x20\x20\x20|\x20$$$$$$$\x5c|\x20$$\x20\x20\x20\x20$$|\x20$$\x20|\x20$$\x20|\x20$$|\x20$$|\x20$$\x20\x20|\x20$$|\x20$$\x20\x20\x20\x20$$\x20\x20\x20\x20\x20\x20|\x20$$\x20\x20\x20__\x20|\x20$$\x20\x20|\x20$$\x20__\x20|\x20$$\x20\x20|\x20$$\x0a\x20\x20\x20\x20|\x20$$__/\x20$$|\x20$$$$$$$$|\x20$$\x20|\x20$$\x20|\x20$$|\x20$$|\x20$$\x20\x20|\x20$$|\x20$$$$$$$$\x20\x20\x20\x20\x20\x20|\x20$$__/\x20\x20\x5c|\x20$$\x20\x20|\x20$$|\x20\x20\x5c|\x20$$__/\x20$$\x0a\x20\x20\x20\x20|\x20$$\x20\x20\x20\x20$$\x20\x5c$$\x20\x20\x20\x20\x20\x5c|\x20$$\x20|\x20$$\x20|\x20$$|\x20$$|\x20$$\x20\x20|\x20$$\x20\x5c$$\x20\x20\x20\x20\x20\x5c\x20\x20\x20\x20\x20\x20\x20\x5c$$\x20\x20\x20\x20$$|\x20$$\x20\x20\x20\x5c$$\x20\x20$$\x20\x5c$$\x20\x20\x20\x20$$\x0a\x20\x20\x20\x20\x20\x5c$$$$$$$\x20\x20\x20\x5c$$$$$$$\x20\x5c$$\x20\x20\x5c$$\x20\x20\x5c$$\x20\x5c$$\x20\x5c$$\x20\x20\x20\x5c$$\x20\x20\x5c$$$$$$$\x20\x20\x20\x20\x20\x20\x20\x20\x5c$$$$$$\x20\x20\x5c$$\x20\x20\x20\x20\x5c$$$$\x20\x20_\x5c$$$$$$$\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20\x20\x5c__|\x20$$\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x5c$$\x20\x20\x20\x20$$\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x5c$$$$$$\x20",
    "Nội\x20dung\x20thông\x20báo",
    "close",
    "red",
    "setTitle",
    "options",
    "setImage",
    "DELETE\x20FROM\x20user_submissions\x20WHERE\x20userId\x20=\x20?",
    "setName",
    "setDescription",
    "verbose",
    "title",
    "setRequired",
    "discord.js",
    "../../submissions.db",
    "5100535TSMOhq",
    "2qyZlKa",
    "run",
    "../config.js",
    "chalk",
    "1801725XiCdhX",
    "log",
    "30TjEeIP",
    "getChannel",
    "ID\x20của\x20người\x20dùng\x20Discord\x20cần\x20ban",
    "error",
    "Could\x20not\x20remove\x20user\x20from\x20the\x20SQLite\x20database:\x20",
    "User\x20not\x20found\x20in\x20database.",
  ];
  _0x59ef = function () {
    return _0x450fc3;
  };
  return _0x59ef();
}
module[_0x744f0e(0x1ce)] = {
  registerCommands: registerCommands,
  handleBanCommand: handleBanCommand,
};
