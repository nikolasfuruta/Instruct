import prisma from "../database/prisma";


export default class FeriadoService {
  public static async teste(){
    return await prisma.feriadoNacional.findMany()
  }

  public static async consultar(cod: string, data: string) {
    return {cod, data}
  }
}