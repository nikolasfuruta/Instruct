import express, {Express} from 'express';
import router from '../routes/feriado-routes';

export default class App {
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
    this.init.use(router)
  };
}