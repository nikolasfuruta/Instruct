/*
  Warnings:

  - You are about to drop the column `codEstado` on the `FeriadoEstadual` table. All the data in the column will be lost.
  - You are about to drop the column `codEstado` on the `FeriadoMunicipal` table. All the data in the column will be lost.
  - You are about to drop the column `codMunicipio` on the `FeriadoMunicipal` table. All the data in the column will be lost.
  - Added the required column `cod` to the `FeriadoEstadual` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cod` to the `FeriadoMunicipal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FeriadoEstadual" DROP COLUMN "codEstado",
ADD COLUMN     "cod" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "FeriadoMunicipal" DROP COLUMN "codEstado",
DROP COLUMN "codMunicipio",
ADD COLUMN     "cod" INTEGER NOT NULL;
