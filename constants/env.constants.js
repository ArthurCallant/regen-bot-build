"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GROUP_ID = void 0;
var dotenv = require("dotenv");
dotenv.config();
var ENV_GROUP_ID = process.env.GROUP_ID;
exports.GROUP_ID = ENV_GROUP_ID;
