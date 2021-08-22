"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', userControllers_1.userControllers.list);
        this.router.get('/:id', userControllers_1.userControllers.getOne);
        this.router.post('/', userControllers_1.userControllers.add);
        this.router.put('/:id', userControllers_1.userControllers.update);
        this.router.delete('/:id', userControllers_1.userControllers.delete);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
