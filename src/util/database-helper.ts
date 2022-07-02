/* eslint-disable @typescript-eslint/no-var-requires */
import {PrismaClient} from "@prisma/client";

export default function insert(){
  const data = [
    {cod:12, sigla:"AC"},
    {cod:27, sigla:"AL"},
    {cod:16, sigla:"AP"},
    {cod:13, sigla:"AM"},
    {cod:29, sigla:"BA"},
    {cod:23, sigla:"CE"},
    {cod:53, sigla:"DF"},
    {cod:32, sigla:"ES"},
    {cod:52, sigla:"GO"},  
    {cod:21, sigla:"MA"},
    {cod:51, sigla:"MT"},  
    {cod:50, sigla:"MS"},
    {cod:31, sigla:"MG"},
    {cod:15, sigla:"PA"},
    {cod:25, sigla:"PB"},
    {cod:41, sigla:"PR"},
    {cod:26, sigla:"PE"},
    {cod:22, sigla:"PI"},
    {cod:33, sigla:"RJ"},
    {cod:24, sigla:"RN"},
    {cod:43, sigla:"RS"},
    {cod:11, sigla:"RO"},
    {cod:14, sigla:"RR"},
    {cod:42, sigla:"SC"},
    {cod:35, sigla:"SP"},
    {cod:28, sigla:"TO"}
  ];

  const prisma = new PrismaClient();
  data.forEach(async data  => {
    try {
      await prisma.estados.create({
        data: {
          nomeEstado:data.sigla,
          codEstado: data.cod
        }
      })
    } catch(e) {
      console.error(e)
    }
  });
};

insert();