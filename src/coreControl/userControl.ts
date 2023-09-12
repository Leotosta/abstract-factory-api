import { UserController } from '../controller/UserController';
import { Response, Request } from 'express';


export class UserControl {

	constructor(private userController: UserController) {}

	async createUser(req: Request, res: Response): Promise<Response> {
		const { email, password } = req.body;

		try {
			await this.userController.createUser({
				email,
				password
			});

			return res.json('Created');
             
		} catch(err) {
			return res.status(400).json({
				message: err.message || 'Unexpected error.'
			});
		}
 	}

}