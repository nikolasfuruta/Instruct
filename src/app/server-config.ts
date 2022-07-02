import express, {Express} from 'express';
import router from '../routes/feriado-routes';

class App {
  init: Express
  constructor(){
    this.init = express();
    this.midd();
    this.routes();
  }

  midd() {
    this.init.use(express.json());
  }

  routes(){
    this.init.use(router);
  };
}

export const app = new App().init