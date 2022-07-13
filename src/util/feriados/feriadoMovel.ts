import pascoaData from "./pascoa";

const pascoa = pascoaData()
const pascoaDia: number = pascoa.getDay()

export function regraFeriadoCarnaval(): Date{
  const dia: number = pascoaDia - 47;
  const mes: number = pascoa.getMonth();

  return new Date(dia,mes)
}

export function regraFeriadoCorpusChristi(): Date{
  const dia: number = pascoaDia + 60;
  const mes: number = pascoa.getMonth();

  return new Date(dia,mes)
}

export function regraFeriadoSextaFeiraSanta(): Date {
  const dia: number  = pascoaDia + 60;
  const mes: number  = pascoa.getMonth();

  return new Date(dia,mes)
}

export default function feriadoMovel(feriado: string){
  switch(feriado) {
    case "carnaval" : return regraFeriadoCarnaval();
    case "corpus-christi": return regraFeriadoCorpusChristi();
    case "sexta-feira-santa": return regraFeriadoSextaFeiraSanta();
    case "pascoa": return pascoaData();
  }
}