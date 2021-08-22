import { Router } from 'express';

import {userControllers} from '../controllers/userControllers';

class UserRoutes {
    public router: Router = Router();

    constructor() {
        this.config()   
    }

    config(): void {
        this.router.get('/',userControllers.list);
        this.router.get('/:id',userControllers.getOne);
        this.router.post('/', userControllers.add);
        this.router.put('/:id', userControllers.update);
        this.router.delete('/:id', userControllers.delete);
    }

}

const userRoutes = new UserRoutes();
export default userRoutes.router;