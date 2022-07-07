import prisma from "../database/prisma";


export default class FeriadoService {
  public static async teste(){
    return await prisma.feriadoNacional.findMany()
  }

  public static async consultar(cod: string, data: string) {
    if(cod.length === 2) {
      return await prisma.feriadoEstadual.findFirst({ where: { dataFeriado: data } });
    }
    else {
      return await prisma.feriadoMunicipal.findFirst({ where: { dataFeriado: data } });
    }
  }
}