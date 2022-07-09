import { FeriadoEstadual, FeriadoMunicipal } from "@prisma/client";
import prisma from "../database/prisma";
import isThereAnyRegistry from "../util/verifyRestry";

export default class FeriadoService {
  public static async teste(){
    return await prisma.feriadoNacional.findMany()
  }

  public static async consultar(cod: string, data: string): Promise<FeriadoEstadual|FeriadoMunicipal> {
    let result: FeriadoEstadual | null;
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
      throw new Error("Not Found")
    }
    return result
  }

  public static async cadastrar(cod: string, estado: string, municipio: string|undefined, feriado: string, date: string): Promise<FeriadoEstadual|FeriadoMunicipal>  {
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
      throw new Error("Registration fail")
    }
    return result
  }

  public static async alterar(cod: string, feriado: string, id: number): Promise<FeriadoEstadual|FeriadoMunicipal>{
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
      throw new Error("Alteration fail");
    }
    return result;
  }

  public static async deletar(cod: string, date: string):Promise<FeriadoEstadual|FeriadoMunicipal>{
    const registry = await isThereAnyRegistry(cod, date);
    if(registry == false){
      throw new Error("Not Found") 
    }

    const id: number = registry;
    let result: FeriadoEstadual|FeriadoMunicipal;
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
      throw new Error("Delete fail");
    }
    return result
  }
}