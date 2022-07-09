import { Carnaval, CorpusChristi, SextaFeiraSanta } from "./interfaces";
import pascoaData from "./pascoa";

const pascoa = pascoaData()
const pascoaDia: number = pascoa.dia;

export default function regraFeriadoCarnaval(): Carnaval {
  const carnavalDia: number = pascoaDia - 47;
  const carnavalMes: number = pascoa.mes;

  return {carnavalDia, carnavalMes}
}

export function regraFeriadoCorpusChristi(): CorpusChristi {
  const corpusChristiDia: number = pascoaDia + 60;
  const corpusChristiMes: number = pascoa.mes;

  return {corpusChristiDia, corpusChristiMes}
}

export function regraFeriadoSextaFeiraSanta(): SextaFeiraSanta {
  const sextaFeiraSantaDia: number = pascoaDia + 60;
  const sextaFeiraSantaMes: number = pascoa.mes;

  return {sextaFeiraSantaDia, sextaFeiraSantaMes}
}