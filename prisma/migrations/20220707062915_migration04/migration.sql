/*
  Warnings:

  - You are about to drop the column `createdAt` on the `FeriadoEstadual` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `FeriadoEstadual` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `FeriadoMunicipal` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `FeriadoMunicipal` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `FeriadoNacional` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `FeriadoNacional` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FeriadoEstadual" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "FeriadoMunicipal" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "FeriadoNacional" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
