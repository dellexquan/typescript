"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AppRouter_1 = require("./AppRouter");
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
require("./controllers");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use((0, cookie_session_1.default)({ keys: ['laskdjf'] }));
        this.app.use(AppRouter_1.AppRouter.getInstance());
    }
    start() {
        this.app.listen(3000, () => {
            console.log('Listening on port 3000');
        });
    }
}
new Server().start();
