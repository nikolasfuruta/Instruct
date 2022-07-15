/*
  Warnings:

  - Changed the type of `dataFeriado` on the `FeriadoEstadual` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dataFeriado` on the `FeriadoMunicipal` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dataFeriado` on the `FeriadoNacional` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "FeriadoEstadual" DROP COLUMN "dataFeriado",
ADD COLUMN     "dataFeriado" DATE NOT NULL;

-- AlterTable
ALTER TABLE "FeriadoMunicipal" DROP COLUMN "dataFeriado",
ADD COLUMN     "dataFeriado" DATE NOT NULL;

-- AlterTable
ALTER TABLE "FeriadoNacional" DROP COLUMN "dataFeriado",
ADD COLUMN     "dataFeriado" DATE NOT NULL;
