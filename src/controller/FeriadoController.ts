import { Request, Response } from "express";
import FeriadoService from "../service/FeriadoService";
import { FeriadoEstadual, FeriadoMunicipal } from "@prisma/client";
import validateAll from '../util/validateAll'

export default class FeriadoController {
  public static async teste(req: Request, res:Response): Promise<void >{
    try {
      const result = await FeriadoService.teste();
      res.status(200).send(result);
    }
    catch(e) {
      console.error(e);
      res.status(500).send("An error occured");
    }
  }

  public static async consultar(req: Request, res:Response): Promise<void> {
    const {estado, municipio, date}: {estado: string, municipio: string|undefined, date: string} = req.body;

    try{
      const validCod = await validateAll(estado, municipio, date);
      const result:FeriadoEstadual | FeriadoMunicipal = await FeriadoService.consultar(validCod , date);
      res.status(200).send(result);
    }
    catch(e) {
      console.error(e);
      res.status(404).send("An error occured");
    }
  }

  public static async cadastrar(req: Request, res:Response): Promise<void>{
    const {estado, municipio, feriado, date}: {estado: string, municipio: string|undefined, feriado: string, date: string} = req.body;
    try{
      const validCod = await validateAll(estado, municipio, date);
      const result:FeriadoEstadual | FeriadoMunicipal = await FeriadoService.cadastrar(validCod, estado, municipio, feriado, date);
      res.status(200).send(result)
    } catch(e){
      console.error(e);
      res.status(404).send("An error occured");
    }
  }

  public static async deletar(req: Request, res:Response){
    const {estado, municipio, date}: {estado: string, municipio: string|undefined, feriado: string, date: string} = req.body;
    try{
      const validCod = await validateAll(estado, municipio, date);
      const result:FeriadoEstadual | FeriadoMunicipal = await FeriadoService.deletar(validCod, date);
      res.status(204).send(result)
    } catch(e){
      console.error(e);
      res.status(404).send("An error occured");
    }
  }
}