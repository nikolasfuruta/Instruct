import { Request, Response } from "express";
import FeriadoService from "../service/FeriadoService";
import obterCod from "../util/axios/ObterCod";
import isValidCode from "../util/validation/codValidation";
import   isValidDate from '../util/validation/dateValidation'

export default class FeriadoController {
  public static async teste(req: Request, res:Response): Promise<void >{
    try {
      const result = await FeriadoService.teste();
      res.status(200).send(result);
    }
    catch(e) {
      console.error(e);
      res.status(500).send("Error to connect with database");
    }
  } 

  public static async consultar(req: Request, res:Response): Promise<void> {
    try{
      const { estado, municipio, data }: {estado:string, municipio?: string, data: string} = req.body;
      const cod: string = obterCod(estado,municipio).toString();

      isValidCode(cod)
      isValidDate(data)
      
      const result = FeriadoService.consultar(cod, data);
      res.status(200).send(result)
    }
    catch(e) {
      console.error(e);
      res.status(400).send("An error occured");
    }
  } 
}