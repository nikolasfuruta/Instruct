import { Request, Response } from "express";
import FeriadoService from "../service/FeriadoService";
import obterCod from "../util/axios/ObterCod";
import isValidCode from "../util/validation/codValidation";
import validateDate from "validate-date";

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
    const {estado, municipio, data} = req.params;

    try{
      const cod: string | undefined = await obterCod(estado,municipio)
      const strCode: string = isValidCode(cod)
      validateDate(data)

      const result = await FeriadoService.consultar(strCode, data);
      res.status(200).send(result)
    }
    catch(e) {
      console.error(e);
      res.status(404).send("An error occured");
    }
  } 
}