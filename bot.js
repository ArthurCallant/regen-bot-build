"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config();
var discord_js_1 = require("discord.js");
var http = require("http");
var messages_js_1 = require("./constants/messages.js");
var roles_utils_js_1 = require("./scripts/utils/roles.utils.js");
var commands_js_1 = require("./scripts/commands.js");
http
    .createServer(function (req, res) {
    res.write("I'm alive");
    res.end();
})
    .listen(8000);
var client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
        discord_js_1.GatewayIntentBits.GuildMembers
    ]
});
client.on('ready', function () {
    var _a;
    console.log("Logged in as ".concat((_a = client.user) === null || _a === void 0 ? void 0 : _a.tag, "!"));
    var activities = messages_js_1.ACTIVITIES, i = 0;
    setInterval(function () { var _a; return (_a = client.user) === null || _a === void 0 ? void 0 : _a.setActivity("".concat(activities[i++ % activities.length])); }, 10000 * 60 * 5);
});
client.on('messageCreate', function (msg) {
    var _a;
    if (msg.author.bot)
        return;
    var args = msg.content.trim().split(/ +/g);
    var command = (_a = args.shift()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    var channelId = msg.channelId;
    var channel = client.channels.cache.get(channelId);
    var channelName = channel.name;
    var isAdmin = (0, roles_utils_js_1.isAuthorAdmin)(msg);
    // if (channelName === 'spoiler-free-bot-channel' && isAdmin) {
    //   if (command !== '?roll') {
    //     msg.reply('Sorry, you can only use the ?roll command in this channel');
    //     return;
    //   } else {
    //     getDiceRoll(msg);
    //   }
    // }
    if (isAdmin) {
        (0, commands_js_1.adminCommands)(msg, command, args);
    }
    else {
        (0, commands_js_1.standardUserCommands)(msg, command, args);
    }
});
//
//
//
//KEEP LAST
client.login(process.env.CLIENT_TOKEN);
