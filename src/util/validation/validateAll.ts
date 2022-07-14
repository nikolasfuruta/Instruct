import obterCod from "../axios/ObterCod";
import isValidCode from "./codValidation";
import isValidDate from "./isValidDate";
import isValidEstado from "./estadoValidation";

export default async function validateAll(estado: string, municipio?: string, date?: string): Promise<string> {
  try{
    isValidEstado(estado);
    if(date) isValidDate(date);
    const cod: string | undefined = await obterCod(estado,municipio);
    const validCode: string = isValidCode(cod);
    return validCode
  }
  catch(e) {
    console.error(e)
    throw new Error("Invalid parameter")
  }
}