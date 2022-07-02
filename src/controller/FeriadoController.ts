import { Request, Response } from "express"
import FeriadoService from "../service/FeriadoService"

export default class FeriadoController {
  public static async teste(req: Request, res:Response): Promise<void >{
    try {
      const result = await FeriadoService.teste()
      res.status(200).send(result)
    }
    catch(e) {
      console.error(e)
      res.status(500).send("Error to connect with database")
    }
  } 

  public static consultar(req: Request, res:Response): void {
    const result = FeriadoService.teste()
    res.status(200).send(result)
  } 
}