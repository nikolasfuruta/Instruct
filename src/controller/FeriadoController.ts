import { Request, Response } from "express";
import FeriadoService from "../service/FeriadoService";
import obterCod from "../util/axios/ObterCod";
import isValidCode from "../util/validation/codValidation";
import isValidEstado from "../util/validation/estadoValidation";
import isValidDate from "../util/validation/dateValidation";
import { FeriadoEstadual, FeriadoMunicipal } from "@prisma/client";

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
    const {estado, municipio, date}: {estado: string, municipio: string|undefined, date: string} = req.body;

    try{
      isValidEstado(estado);
      isValidDate(date);
      const cod: string | undefined = await obterCod(estado,municipio);
      const strCode: string = isValidCode(cod);

      const result:FeriadoEstadual | FeriadoMunicipal = await FeriadoService.consultar(strCode, date);
      res.status(200).send(result)
    }
    catch(e) {
      console.error(e);
      res.status(404).send("An error occured");
    }
  }

  public static async cadastrar(req: Request, res:Response): Promise<void>{
    const {estado, municipio, feriado, date}: {estado: string, municipio: string|undefined, feriado: string, date: string} = req.body
    try{
      isValidEstado(estado);
      isValidDate(date);
      const cod: string | undefined = await obterCod(estado,municipio);
      const strCode: string = isValidCode(cod);

      const result:FeriadoEstadual | FeriadoMunicipal = await FeriadoService.cadastrar(strCode, estado, municipio, feriado, date);
      res.status(201).send(result)
    } catch(e){
      console.error(e);
      res.status(404).send("An error occured");
    }
  }
}