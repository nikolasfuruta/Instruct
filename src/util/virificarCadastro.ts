import { FeriadoEstadual, FeriadoMunicipal } from "@prisma/client";
import prisma from "../database/prisma";

export default async function verificar(cod: string, date: string){
    let verify: FeriadoEstadual | FeriadoMunicipal | null;
    if(cod.length === 2) {
      verify = await prisma.feriadoEstadual.findFirst({
        where: { 
          cod: Number(cod),
          dataFeriado: date
        }
      });
    }
    else {
      verify = await prisma.feriadoMunicipal.findFirst({
        where: { 
          cod: Number(cod),
          dataFeriado: date
        }
      });
    }
    return verify ? Number(verify.id) : false;
}