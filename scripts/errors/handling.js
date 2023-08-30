"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allCatcher = exports.playerError = exports.topTenError = exports.incorrectId = void 0;
function incorrectId(e, msg) {
    msg.reply("I can't seem to find the competition. Are you sure the id is correct?\nUse the '!help' command to get a list of commands and how to use them.");
    console.trace();
    console.error(e);
}
exports.incorrectId = incorrectId;
function topTenError(e, msg) {
    msg.reply("Something went wrong getting the top 10 for this metric.\nUse the '!help' command to get a list of commands and how to use them.");
    console.trace();
    console.error(e);
}
exports.topTenError = topTenError;
function playerError(e, msg) {
    msg.reply("Something went wrong fetching the details for this player. Are you sure the name is correct?\nUse the '!help' command to get a list of commands and how to use them.");
    console.trace();
    console.error(e);
}
exports.playerError = playerError;
function allCatcher(e, msg) {
    if (msg === void 0) { msg = undefined; }
    msg.reply('Something went wrong. Please try again, or contact Belgiska.');
    console.trace();
    console.error(e);
}
exports.allCatcher = allCatcher;
