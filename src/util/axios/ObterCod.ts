import axios , { AxiosResponse } from "axios";
import { load } from 'cheerio';

export default async function obterCod(estado: string, municipio?: string): Promise<string | undefined>{
  let url: string;
  if(municipio != undefined) {
    url = `https://www.ibge.gov.br/cidades-e-estados/${estado}/${municipio}.html`;
  }
  else {
    url = `https://www.ibge.gov.br/cidades-e-estados/${estado}`;
  }
  return await gerarCod(url)
}

export async function gerarCod(url: string): Promise<string | undefined> {
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