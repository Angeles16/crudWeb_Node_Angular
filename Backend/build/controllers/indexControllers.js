"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexControllers = void 0;
class IndexControllers {
    index(req, res) {
        res.send("hello");
    }
}
exports.indexControllers = new IndexControllers();
