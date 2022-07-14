import pascoaData from "./pascoa";

const pascoa = pascoaData()

export function regraFeriadoCarnaval(): moment.Moment{
  const data = pascoa.subtract(48,"d");
  return data;
}

export function regraFeriadoCorpusChristi(): moment.Moment{
  const data = pascoa.add(60,"d");
  return data;
}

export function regraFeriadoSextaFeiraSanta(): moment.Moment{
  const data = pascoa.subtract(2,"d");
  return data;
}

export default function feriadoMovel(feriado: string): moment.Moment {
  switch(feriado) {
    case "carnaval" : return regraFeriadoCarnaval();
    case "corpus-christi": return regraFeriadoCorpusChristi();
    case "sexta-feira-santa": return regraFeriadoSextaFeiraSanta();
    case "pascoa": return pascoaData();
    default: throw new Error("Invalid Feriado");
  }
}
