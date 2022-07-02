import prisma from "../database/prisma";


export default class FeriadoService {
  public static async teste(){
    return await prisma.feriadoNacional.findMany()
  }
}