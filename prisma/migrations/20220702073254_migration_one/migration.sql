-- CreateTable
CREATE TABLE "FeriadoNacional" (
    "id" SERIAL NOT NULL,
    "dataFeriado" DATE NOT NULL,
    "nomeFeriado" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeriadoNacional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeriadoEstadual" (
    "id" SERIAL NOT NULL,
    "dataFeriado" DATE NOT NULL,
    "nomeFeriado" TEXT NOT NULL,
    "codEstado" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeriadoEstadual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeriadoMunicipal" (
    "id" SERIAL NOT NULL,
    "dataFeriado" DATE NOT NULL,
    "nomeFeriado" TEXT NOT NULL,
    "codMunicipio" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeriadoMunicipal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movel" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dataFeriado" DATE NOT NULL,
    "nomeFeriado" TEXT NOT NULL,
    "estado" INTEGER NOT NULL,
    "municipio" INTEGER NOT NULL,

    CONSTRAINT "Movel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estados" (
    "id" SERIAL NOT NULL,
    "nomeEstado" TEXT NOT NULL,
    "codEstado" INTEGER NOT NULL,

    CONSTRAINT "Estados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Municipios" (
    "id" SERIAL NOT NULL,
    "nomeMunicipio" TEXT NOT NULL,
    "codMunicipio" INTEGER NOT NULL,
    "codEstado" INTEGER NOT NULL,

    CONSTRAINT "Municipios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FeriadoNacional_dataFeriado_key" ON "FeriadoNacional"("dataFeriado");

-- CreateIndex
CREATE UNIQUE INDEX "FeriadoNacional_nomeFeriado_key" ON "FeriadoNacional"("nomeFeriado");

-- CreateIndex
CREATE UNIQUE INDEX "Estados_nomeEstado_key" ON "Estados"("nomeEstado");

-- CreateIndex
CREATE UNIQUE INDEX "Estados_codEstado_key" ON "Estados"("codEstado");

-- CreateIndex
CREATE UNIQUE INDEX "Municipios_nomeMunicipio_key" ON "Municipios"("nomeMunicipio");

-- CreateIndex
CREATE UNIQUE INDEX "Municipios_codMunicipio_key" ON "Municipios"("codMunicipio");

-- AddForeignKey
ALTER TABLE "FeriadoEstadual" ADD CONSTRAINT "FeriadoEstadual_codEstado_fkey" FOREIGN KEY ("codEstado") REFERENCES "Estados"("codEstado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeriadoMunicipal" ADD CONSTRAINT "FeriadoMunicipal_codMunicipio_fkey" FOREIGN KEY ("codMunicipio") REFERENCES "Municipios"("codMunicipio") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Municipios" ADD CONSTRAINT "Municipios_codEstado_fkey" FOREIGN KEY ("codEstado") REFERENCES "Estados"("codEstado") ON DELETE RESTRICT ON UPDATE CASCADE;
