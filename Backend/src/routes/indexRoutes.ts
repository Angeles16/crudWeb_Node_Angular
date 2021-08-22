import { Router } from 'express';

import {indexControllers} from '../controllers/indexControllers';

class IndexRoute {
    public router: Router = Router();

    constructor() {
        this.config()   
    }

    config(): void {
        this.router.get('/', indexControllers.index);
    }

}

const indexRoute = new IndexRoute();
export default indexRoute.router;