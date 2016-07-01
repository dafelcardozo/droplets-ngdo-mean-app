import * as express from 'express';
import {TodoRoutes} from '../api/todo/routes/todo-routes';
import {donorRoutes} from '../api/profile-form/routes/donor-route';
import {StaticDispatcher} from '../commons/static/index';


export class Routes {
   static init(app: express.Application, router: express.Router) {
     TodoRoutes.init(router);
     donorRoutes.init(router);

     router
       .route('*')
       .get(StaticDispatcher.sendIndex);


     app.use('/', router);
   }
}
