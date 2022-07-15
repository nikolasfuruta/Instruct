import { FeriadoEstadual, FeriadoMunicipal } from "@prisma/client";
import moment from "moment";
import prisma from "../database/prisma";

export default async function isThereAnyRegistry(cod: string, date: moment.Moment, feriado?: string){
    let registry: FeriadoEstadual | FeriadoMunicipal | null;
    try{
      if(cod.length === 2) {
        registry = await prisma.feriadoEstadual.findFirst({
          where: { cod: Number(cod), dataFeriado: date.toISOString(), nomeFeriado: feriado }
        });
      }
      else {
        registry = await prisma.feriadoMunicipal.findFirst({
          where: { cod: Number(cod), dataFeriado: date.toISOString(), nomeFeriado: feriado }
        });
      }
      return registry ? Number(registry.id) : false;
    }
    catch(e){
      throw new Error("Data Base Fail")
    }
}