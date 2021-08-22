import { Request, Response } from 'express';

import db from '../databases';

class UserControllers{


    public async list (req: Request, res: Response): Promise<void>{
        const user = await db.query('SELECT * FROM user ORDER BY id');
        res.json(user);
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const userId = await db.query('SELECT * FROM user WHERE id=?', [id]);
        if(userId.length > 0){
            return res.json(userId[0]);
        } 
        res.status(404).json({text: 'El usuario no existe'});
    }

    public async add (req: Request, res: Response): Promise<void>{
        await db.query('INSERT INTO user SET ?', [req.body]);
         res.json({message: 'Juego guardado'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('UPDATE user SET ? WHERE id = ?', [req.body, id]);
        res.json({message: 'El Usuario fue actualizado ' });
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('DELETE FROM user WHERE id = ?', [id]);
        res.json({message: 'El Usuario fue eliminado ' });
    }
}//Fin UserControllers

export const userControllers = new UserControllers();
