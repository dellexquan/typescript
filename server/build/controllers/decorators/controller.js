"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.router = void 0;
require("reflect-metadata");
const AppRouter_1 = require("../../AppRouter");
const metadataKeys_1 = require("./metadataKeys");
exports.router = AppRouter_1.AppRouter.getInstance();
function bodyValidator(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send('Invalid request.');
            return;
        }
        for (let key of keys) {
            if (!req.body[key]) {
                res.status(422).send('Invalid request.');
                return;
            }
        }
        next();
    };
}
function controller(routePrefix) {
    return function (target) {
        var _a;
        console.log(target);
        const keys = Object.getOwnPropertyNames(target.prototype);
        for (let key of keys) {
            const routeHandler = (_a = Object.getOwnPropertyDescriptor(target.prototype, key)) === null || _a === void 0 ? void 0 : _a.value;
            const path = Reflect.getMetadata(metadataKeys_1.MetadataKeys.path, target.prototype, key);
            const method = Reflect.getMetadata(metadataKeys_1.MetadataKeys.method, target.prototype, key);
            const middlewares = Reflect.getMetadata(metadataKeys_1.MetadataKeys.middleware, target.prototype, key) || [];
            const requiredBodyProps = Reflect.getMetadata(metadataKeys_1.MetadataKeys.validator, target.prototype, key) || [];
            const validator = bodyValidator(requiredBodyProps);
            if (path) {
                exports.router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
            }
        }
    };
}
exports.controller = controller;
