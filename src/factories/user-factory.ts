import { UserControl } from '../coreControl/userControl';
import { UserController } from '../controller/UserController';
import { UserRepository } from '../repository/UserRepository';

const userRep = new UserRepository();

const userController = new UserController(userRep);
const userControl = new UserControl(userController);


export { userControl };