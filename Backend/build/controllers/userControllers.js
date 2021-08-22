"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const databases_1 = __importDefault(require("../databases"));
class UserControllers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield databases_1.default.query('SELECT * FROM user ORDER BY id');
            res.json(user);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const userId = yield databases_1.default.query('SELECT * FROM user WHERE id=?', [id]);
            if (userId.length > 0) {
                return res.json(userId[0]);
            }
            res.status(404).json({ text: 'El usuario no existe' });
        });
    }
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield databases_1.default.query('INSERT INTO user SET ?', [req.body]);
            res.json({ message: 'Juego guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield databases_1.default.query('UPDATE user SET ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'El Usuario fue actualizado ' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield databases_1.default.query('DELETE FROM user WHERE id = ?', [id]);
            res.json({ message: 'El Usuario fue eliminado ' });
        });
    }
} //Fin UserControllers
exports.userControllers = new UserControllers();
