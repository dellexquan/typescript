"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const AppRouter_1 = require("../AppRouter");
const router = AppRouter_1.AppRouter.getInstance();
exports.router = router;
function post(routeName) {
    return function (target, key, desc) {
        router.post(routeName, target[key]);
    };
}
function use(middleware) {
    return function (target, key, desc) { };
}
