"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.standardUserCommands = exports.adminCommands = void 0;
var wom_1 = require("./wom");
var bingo_1 = require("./bingo");
function adminCommands(msg, command, args) {
    switch (command) {
        case '?sotw':
            (0, wom_1.getResults)(msg, parseInt(args[0]), 'sotw');
            break;
        case '?botw':
            (0, wom_1.getResults)(msg, parseInt(args[0]), 'botw');
            break;
        case '?ttm':
            (0, wom_1.getTopTen)(msg, 'ttm');
            break;
        case '?exp':
            (0, wom_1.getTopTen)(msg, 'exp');
            break;
        case '?ehb':
            (0, wom_1.getTopTen)(msg, 'ehb');
            break;
        case '?ehp':
            (0, wom_1.getTopTen)(msg, 'ehp');
            break;
        case '?rgn':
            (0, wom_1.getTopTen)(msg, 'balance');
            break;
        case '?month':
            var monthArg = args.shift();
            var yearArg = args.shift();
            var month = monthArg && !isNaN(parseInt(monthArg)) ? parseInt(monthArg) : undefined;
            var year = yearArg && !isNaN(parseInt(yearArg)) ? parseInt(yearArg) : undefined;
            (0, wom_1.getMonthlyGains)(msg, { month: month, year: year });
            break;
        case '?log':
            (0, wom_1.getTopTen)(msg, 'log');
            break;
        case '?pets':
            (0, wom_1.getTopTen)(msg, 'pets');
            break;
        default:
            standardUserCommands(msg, command, args);
            break;
    }
}
exports.adminCommands = adminCommands;
function standardUserCommands(msg, command, args) {
    var _a, _b;
    var playerName;
    var skill;
    var boss;
    switch (command) {
        case '!help':
        case '/help':
        case '?help':
            // TODO explain changes to permissions, and that certain users can't use certain commands anymore
            (0, wom_1.getCommands)(msg);
            break;
        case '?calc':
            (0, wom_1.getClanRankCalculator)(msg);
            break;
        case '?comps':
            (0, wom_1.getGroupCompetitions)(msg);
            break;
        case '?calendar':
            (0, wom_1.getCompCalendar)(msg);
            break;
        case '?lvl':
            skill = (_a = args.shift()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            playerName = args.join(' ').toString();
            (0, wom_1.getPlayerSkillStat)(msg, skill, playerName);
            break;
        case '?kc':
            boss = (_b = args.shift()) === null || _b === void 0 ? void 0 : _b.toLowerCase();
            playerName = args.join(' ').toString();
            (0, wom_1.getPlayerBossStat)(msg, boss, playerName);
            break;
        case '?balance':
            playerName = args.join(' ').toString();
            (0, wom_1.getBalance)(msg, playerName);
            break;
        case '?roll':
            (0, bingo_1.getDiceRoll)(msg);
        default:
            break;
    }
}
exports.standardUserCommands = standardUserCommands;
