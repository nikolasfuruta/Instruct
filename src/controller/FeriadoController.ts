import { Request, Response } from "express"
import FeriadoService from "../service/FeriadoService"

export default class FeriadoController {
  public static teste(req: Request, res:Response): void {
    const result = FeriadoService.teste()
    res.status(200).send(result)
  } 
}