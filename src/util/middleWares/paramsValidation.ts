import { Request,Response } from 'express'


export default function middParam(req: Request, res: Response, next: () => void){
  let { estado, municipio }: {estado: string, municipio: string|undefined} = req.body

  if(estado !== estado.toUpperCase()){
    estado = estado.toUpperCase();
  }
  if(municipio !== undefined && municipio !== municipio.toLowerCase()) {
    municipio = municipio.toLowerCase();
  }
  next()
}