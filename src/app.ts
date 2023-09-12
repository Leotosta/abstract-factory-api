import express from 'express';
import RouterApp from './router/Router';
/* import RouterApp from './router/Router'; */

class App {

	public app: express.Application;

	constructor() {
		this.app = express();
		this.config();
		this.routes();
        
	}

	private config() {
		this.app.use(express.json());
	}

	private routes(): void {
		this.app.use(RouterApp);
	}


} 

export default new App().app;