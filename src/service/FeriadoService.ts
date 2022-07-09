import { FeriadoEstadual, FeriadoMunicipal } from "@prisma/client";
import prisma from "../database/prisma";
import isThereAnyRegistry from "../util/verifyRestry";

export default class FeriadoService {
  public static async teste(){
    return await prisma.feriadoNacional.findMany()
  }

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

  public static async consultar(cod: string, data: string): Promise<FeriadoEstadual|FeriadoMunicipal|{message: string}> {
    try{
      let result: FeriadoEstadual|FeriadoMunicipal| null
      if(cod.length === 2) {
        result = await prisma.feriadoEstadual.findFirst({
          where: {
            cod: Number(cod),
            dataFeriado: data
          }
        });
      }
      else {
        result = await prisma.feriadoMunicipal.findFirst({ 
          where: {
            cod: Number(cod),
            dataFeriado: data 
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

  public static async cadastrar(cod: string, feriado: string, date: string): Promise<FeriadoEstadual|FeriadoMunicipal|{message:string}>  {
    try{
      const registry = await isThereAnyRegistry(cod, date);
      if(registry!== false){
        const id: number = registry;
        return await this.alterar(cod, feriado, id);
      }
      let result: FeriadoEstadual|FeriadoMunicipal;
      if(cod.length === 2) {
        result = await prisma.feriadoEstadual.create({
          data: {
            cod: Number(cod),
            dataFeriado: date,
            nomeFeriado: feriado,
            tipoMovel: false
          }
        });
      }
      else {
        result = await prisma.feriadoMunicipal.create({
          data: {
            cod: Number(cod),
            dataFeriado: date,
            nomeFeriado: feriado,
            tipoMovel: false
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

  public static async deletar(cod: string, date: string): Promise<void|{message:string}>{
    try{
      const registry = await isThereAnyRegistry(cod, date);
      if(registry == false){
        throw new Error("Not Found") 
      }
      let result;
      const id: number = registry;
      if(cod.length === 2) {
        result = await prisma.feriadoEstadual.delete({
          where: {
            id: id
          }
        });
      }
      else {
        result = await prisma.feriadoMunicipal.delete({
          where: {
            id: id
          }
        });
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