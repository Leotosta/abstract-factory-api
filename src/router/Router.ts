import { Router} from 'express';
import { userControl } from '../factories/user-factory';

class RouterApp {

	 public router = Router();

	constructor() {
		this.loginRoutes();
	}


	public loginRoutes() {
		this.router.post('/user', (request, response) => userControl.createUser(request, response));
	
	}

}

export default new RouterApp().router;
