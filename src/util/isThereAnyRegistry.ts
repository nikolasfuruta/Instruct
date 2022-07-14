import { FeriadoEstadual, FeriadoMunicipal } from "@prisma/client";
import prisma from "../database/prisma";

export default async function isThereAnyRegistry(cod: string, date: string){
    let registry: FeriadoEstadual | FeriadoMunicipal | null;
    if(cod.length === 2) {
      registry = await prisma.feriadoEstadual.findFirst({
        where: { 
          cod: Number(cod),
          dataFeriado: date
        }
      });
    }
    else {
      registry = await prisma.feriadoMunicipal.findFirst({
        where: { 
          cod: Number(cod),
          dataFeriado: date
        }
      });
    }
    return registry ? Number(registry.id) : false;
}