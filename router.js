"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var userController_1 = require("./src/user/service/userController");
exports.router = (0, express_1.Router)();
exports.router.use("/service", userController_1.userController);
