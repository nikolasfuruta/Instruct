import { Request, Response } from "express";
import FeriadoService from "../service/FeriadoService";
import validateAll from '../util/validation/validateAll'
import feriadoMovel from "../util/feriados/feriadoMovel";
import moment from "moment";

export default class FeriadoController {

  public static async consultarTodos(req: Request, res:Response){
    try{
      const result = await FeriadoService.consultarTodos();
      res.status(200).send(result);
    }
    catch(e) {
      console.error(e);
      res.status(404).send("An error occured");
    }
  }

  public static async consultar(req: Request, res:Response): Promise<void> {
    const {estado, municipio, date}: {estado: string, municipio?: string, date: string} = req.body;

    try{
      const validCod = await validateAll(estado, municipio, date);
      const dateFormat = moment(date, "YYYY-MM-DD");
      const result = await FeriadoService.consultar(validCod , dateFormat);
      res.status(200).send(result);
    }
    catch(e) {
      console.error(e);
      res.status(404).send("An error occured");
    }
  }

  public static async cadastrar(req: Request, res:Response): Promise<void>{
    const {estado, municipio, feriado, date, movel}: {estado: string, municipio?: string, feriado: string, date?: string, movel: boolean} = req.body;
    try{
      let dateFormat;
      const validCod = await validateAll(estado, municipio, date);
      date ?  dateFormat = moment(date, "YYYY-MM-DD") : dateFormat = feriadoMovel(feriado);
      
      const result = await FeriadoService.cadastrar(validCod, feriado, dateFormat, movel);
      res.status(200).send(result);
    } catch(e){
      console.error(e);
      res.status(404).send("An error occured");
    }
  }

  public static async deletar(req: Request, res:Response): Promise<void>{
    const {cod, id}: {cod: string, id: number} = req.body
    try{
      await FeriadoService.deletar(cod, id);
      res.status(204).send({message:"deleted"});
    } catch(e){
      console.error(e);
      res.status(404).send("An error occured");
    }
  }

}