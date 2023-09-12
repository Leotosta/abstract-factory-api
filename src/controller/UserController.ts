import { User } from '../schema/User';
import { IUserRepository } from '../model/IUserRepository';
import { IUser } from '../model/IUser';

export class UserController {
	constructor(
        private userRepository: IUserRepository  
	) {   }

	async createUser(data: IUser) {
		const hasUser = await this.userRepository.findByEmail(data.email);

		if(hasUser) {
			throw new Error('User Already Exists!');
		}

		const user = new User(data);
		console.log(user);
		

		await this.userRepository.save(user);

		/* 
            await this.mailRepo.sendEmail({
                data.user
                data.pass
            })
        */

	}

}