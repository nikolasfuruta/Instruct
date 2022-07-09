import { Request,Response } from 'express'


export default function middParam(req: Request, res: Response, next: () => void){
  let estado: string = req.params.estado;
  let municipio: string|undefined = req.params.municipio;

  if(estado !== estado.toUpperCase()){
    estado = estado.toUpperCase();
  }
  if(municipio !== undefined && municipio !== municipio.toLowerCase()) {
    municipio = municipio.toLowerCase();
  }
  next()
}