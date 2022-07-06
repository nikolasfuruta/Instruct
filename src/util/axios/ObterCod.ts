import axios , { AxiosResponse } from "axios";
import { load } from 'cheerio';

export default async function obterCod(estado: string, municipio?: string): Promise<string | undefined> {
  if(municipio != undefined) {
    return await codMunicipio(estado, municipio)
  }
  else {
    await codEstado(estado)
  }
}

export async function codMunicipio(estado: string, municipio: string){
  const url = `https://www.ibge.gov.br/cidades-e-estados/${estado}/${municipio}.html`
  try{
    const response: AxiosResponse = await axios(url)
    const html: string = response.data;
    const $ = load(html);
    const tag = $('#responseMunicipios');
    const cod = tag.attr('data-codigo');
    return cod
  }
  catch(e) { console.error(e) }
  finally { console.log("concluído") }
}

export async function codEstado(estado: string){
  const url = `https://www.ibge.gov.br/cidades-e-estados/${estado}`;
  try{
    const response: AxiosResponse = await axios(url)
    const html: string = response.data;
    const $ = load(html);
    const tag = $('#responseMunicipios');
    const cod = tag.attr('data-codigo');
    return cod
  }
  catch(e) { console.error(e) }
  finally { console.log("concluído") }
}

obterCod("SP")