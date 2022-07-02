/* eslint-disable @typescript-eslint/no-var-requires */
import {PrismaClient} from "@prisma/client";

type Data = {
  nomeFeriado:string,
  dataFeriado:Date,
  tipoMovel: boolean
}

export default function insert(){
  const data: Data[] = [
    {nomeFeriado:"Ano Novo", dataFeriado: new Date("2022-01-01"), tipoMovel: false},
    {nomeFeriado:"Tiradentes", dataFeriado: new Date("2022-04-21"), tipoMovel: false},
    {nomeFeriado:"Dia do Trabalhador", dataFeriado: new Date("2022-05-01"), tipoMovel: false},
    {nomeFeriado:"Independência", dataFeriado: new Date("2022-09-07"), tipoMovel: false},
    {nomeFeriado:"Nossa Senhora Aparecida", dataFeriado: new Date("2022-10-12"), tipoMovel: false},
    {nomeFeriado:"Finados", dataFeriado: new Date("2022-11-02"), tipoMovel: false},
    {nomeFeriado:"Proclamação da República", dataFeriado: new Date("2022-11-15"), tipoMovel: false},
    {nomeFeriado:"Natal", dataFeriado: new Date("2022-12-25"), tipoMovel: false},
  ];

  const prisma = new PrismaClient();
  data.forEach(async data  => {
    try {
      await prisma.feriadoNacional.create({
        data: {
          nomeFeriado: data.nomeFeriado,
          dataFeriado: data.dataFeriado,
          tipoMovel: data.tipoMovel
        }
      })
    } catch(e) {
      console.error(e)
    }
    finally {
      console.log("CONCLUÍDO")
    }
  });
};

insert();