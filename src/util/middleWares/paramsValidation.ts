import { Request,Response } from 'express'
import validateDate from "validate-date";

export default function isValidParam(req: Request, res: Response, next: () => void){
  const estado: string = req.params.estado;
  const municipio: string|undefined = req.params.municipio;
  const data: string = req.params.data;

  if(estado !== estado.toUpperCase() || estado.length !== 2){
    res.status(400).send({message: "Invalid Estado statement"})
  }
  if(municipio !== undefined && municipio !== municipio.toLowerCase()) {
    res.status(400).send({message: "Invalid Municipio statement"})
  }
  if(!validateDate(data, "boolean")) {
    res.status(400).send({message: "Invalid date"})
  }
  next()
}