import { FeriadoEstadual, FeriadoMunicipal } from "@prisma/client";
import prisma from "../database/prisma";
import verificar from "../util/virificarCadastro";

export default class FeriadoService {
  public static async teste(){
    return await prisma.feriadoNacional.findMany()
  }

  public static async consultar(cod: string, data: string): Promise<FeriadoEstadual|FeriadoMunicipal> {
    let result;
    if(cod.length === 2) {
      result = await prisma.feriadoEstadual.findFirst({ where: { dataFeriado: data } });
    }
    else {
      result = await prisma.feriadoMunicipal.findFirst({ where: { dataFeriado: data } });
    }
    if(!result){
      throw new Error("Not Found")
    }
    return result
  }

  public static async cadastrar(cod: string, estado: string, municipio: string|undefined, feriado: string, date: string): Promise<FeriadoEstadual|FeriadoMunicipal>  {
    let result;

    const verify = await verificar(cod, date);
    if(verify !== false){
      const id: number = verify;
      this.alterar(cod, feriado, id);
    }

    if(cod.length === 2) {
      result = await prisma.feriadoEstadual.create({
        data: {
          codEstado: Number(estado),
          dataFeriado: date,
          nomeFeriado: feriado,
          tipoMovel: false
        }
      });
    }
    else {
      result = await prisma.feriadoMunicipal.create({
        data: {
          codMunicipio: Number(municipio),
          codEstado: Number(estado),
          dataFeriado: date,
          nomeFeriado: feriado,
          tipoMovel: false
        }
      });
    }
    if(!result){
      throw new Error("Not Found")
    }
    return result
  }

  public static async alterar(cod: string, feriado: string, id: number){
    let result;
    if(cod.length === 2) {
      result = await prisma.feriadoEstadual.update({
        where: {
          id: id
        },
        data: {
          dataFeriado: feriado
        }
      });
    }
    else {
      result = await prisma.feriadoMunicipal.update({
        where: {
          id: id
        },
        data: {
          dataFeriado: feriado
        }
      });
    }
    if(!result){
      throw new Error("Not Found")
    }
    return result
  }
}