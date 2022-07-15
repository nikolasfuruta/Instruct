import { FeriadoEstadual, FeriadoMunicipal } from "@prisma/client";
import moment from "moment";
import prisma from "../database/prisma";
import isThereAnyRegistry from "../util/isThereAnyRegistry";

export default class FeriadoService {

  public static async consultarTodos(): Promise<"Not Found"|{resultEstado: FeriadoEstadual[],resultMunicipio: FeriadoMunicipal[]}>{
    try{
      const resultEstado = await prisma.feriadoEstadual.findMany({});
      const resultMunicipio = await prisma.feriadoMunicipal.findMany({});
      if(!resultEstado || !resultMunicipio){
        return ("Not Found")
      }
      return { resultEstado, resultMunicipio }
    }
    catch(e){
      throw new Error("Database error");
    }
  }

  public static async consultar(cod: string, data: moment.Moment): Promise<FeriadoEstadual|FeriadoMunicipal|{message: string}> {
    try{
      let result: FeriadoEstadual|FeriadoMunicipal| null
      if(cod.length === 2) {
        result = await prisma.feriadoEstadual.findFirst({
          where: {
            cod: Number(cod),
            dataFeriado: data.toISOString()
          }
        });
      }
      else {
        result = await prisma.feriadoMunicipal.findFirst({ 
          where: {
            cod: Number(cod),
            dataFeriado: data.toISOString()
          } 
        });
      }
      if(!result){
        return({message: "Not Found"});
      }
      return result;
    }
    catch(e) {
      throw new Error("Database error");
    }
    
  }

  public static async cadastrar(cod: string, feriado: string, date: moment.Moment, movel: boolean): Promise<FeriadoEstadual|FeriadoMunicipal|{message:string}>  {
    try{
      const registry = await isThereAnyRegistry(cod, date);
      if(registry){
        const id: number = registry;
        return await this.alterar(cod, feriado, id);
      }
      let result: FeriadoEstadual|FeriadoMunicipal;
      if(cod.length === 2) {
        result = await prisma.feriadoEstadual.create({
          data: {
            cod: Number(cod),
            dataFeriado: date.toISOString(),
            nomeFeriado: feriado,
            tipoMovel: movel
          }
        });
      }
      else {
        result = await prisma.feriadoMunicipal.create({
          data: {
            cod: Number(cod),
            dataFeriado: date.toISOString(),
            nomeFeriado: feriado,
            tipoMovel: movel
          }
        });
      }
      if(!result){
        return({message:"Registration fail"});
      }
      return result;
    }
    catch(e) {
      throw new Error("Database error");
    }
  }

  public static async alterar(cod: string, feriado: string, id: number): Promise<FeriadoEstadual|FeriadoMunicipal|{message:string}>{
    try{
      let result: FeriadoEstadual|FeriadoMunicipal;
      if(cod.length === 2) {
        result = await prisma.feriadoEstadual.update({
          where: {
            id: id
          },
          data: {
            nomeFeriado: feriado
          }
        });
      }
      else {
        result = await prisma.feriadoMunicipal.update({
          where: {
            id: id
          },
          data: {
            nomeFeriado: feriado
          }
        });
      }
      if(!result){
        return({message:"Alteration fail"});
      }
      return result;
    }
    catch(e){
      throw new Error("Database error");
    }
  }

  public static async deletar(cod: string, id: number): Promise<void|{message:string}>{
    try{
      let result: FeriadoEstadual|FeriadoMunicipal;
      if(cod.length === 2) {
        result = await prisma.feriadoEstadual.delete({ where: { id: id } });
      }
      else {
        result = await prisma.feriadoMunicipal.delete({ where: { id: id } });
      }

      if(!result){
        return({message:"Delete fail"});
      }
      return;
    }
    catch(e){
      throw new Error("Database error");
    }
  }
}