import { FeriadoEstadual, FeriadoMunicipal } from "@prisma/client";
import moment from "moment";
import prisma from "../database/prisma";

export default async function isThereAnyRegistry(cod: string, date: moment.Moment){
    let registry: FeriadoEstadual | FeriadoMunicipal | null;
    if(cod.length === 2) {
      registry = await prisma.feriadoEstadual.findFirst({
        where: { 
          cod: Number(cod),
          dataFeriado: date.toISOString()
        }
      });
    }
    else {
      registry = await prisma.feriadoMunicipal.findFirst({
        where: { 
          cod: Number(cod),
          dataFeriado: date.toISOString()
        }
      });
    }
    return registry ? Number(registry.id) : false;
}