/*
  Warnings:

  - You are about to drop the `Estados` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Movel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Municipios` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tipoMovel` to the `FeriadoEstadual` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codEstado` to the `FeriadoMunicipal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoMovel` to the `FeriadoMunicipal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoMovel` to the `FeriadoNacional` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FeriadoEstadual" DROP CONSTRAINT "FeriadoEstadual_codEstado_fkey";

-- DropForeignKey
ALTER TABLE "FeriadoMunicipal" DROP CONSTRAINT "FeriadoMunicipal_codMunicipio_fkey";

-- DropForeignKey
ALTER TABLE "Municipios" DROP CONSTRAINT "Municipios_codEstado_fkey";

-- DropIndex
DROP INDEX "FeriadoNacional_dataFeriado_key";

-- DropIndex
DROP INDEX "FeriadoNacional_nomeFeriado_key";

-- AlterTable
ALTER TABLE "FeriadoEstadual" ADD COLUMN     "tipoMovel" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "FeriadoMunicipal" ADD COLUMN     "codEstado" INTEGER NOT NULL,
ADD COLUMN     "tipoMovel" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "FeriadoNacional" ADD COLUMN     "tipoMovel" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "Estados";

-- DropTable
DROP TABLE "Movel";

-- DropTable
DROP TABLE "Municipios";
