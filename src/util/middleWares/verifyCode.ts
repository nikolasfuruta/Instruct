import { Request, Response } from 'express'

export default function verifyCode(req: Request, res: Response, next: ()=>void): void {
  const code: string = req.body.cod;
  if(code.length === 2 || code.length === 7){
    next()
  }
  else{
    throw new Error("Invalid Code")
  }
}