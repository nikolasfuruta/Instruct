import obterCod from "../axios/ObterCod";
import isValidCode from "./codValidation";
import isValidDate from "./dateValidation";
import isValidEstado from "./estadoValidation";

export default async function validateAll(estado: string, municipio: string|undefined, date: string): Promise<string> {
  try{
    isValidEstado(estado);
    isValidDate(date);
    const cod: string | undefined = await obterCod(estado,municipio);
    const validCode: string = isValidCode(cod);
    return validCode
  }
  catch(e) {
    console.error(e)
    throw new Error("Invalid parameter")
  }
}