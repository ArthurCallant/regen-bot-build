"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthorAdmin = void 0;
function isAuthorAdmin(msg) {
    return msg.member.roles.cache.some(function (role) { return role.name === 'Admin'; });
}
exports.isAuthorAdmin = isAuthorAdmin;
