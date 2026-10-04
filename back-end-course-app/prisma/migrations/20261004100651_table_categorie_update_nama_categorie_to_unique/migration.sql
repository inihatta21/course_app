/*
  Warnings:

  - A unique constraint covering the columns `[nama_categorie]` on the table `categorie` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "categorie_nama_categorie_key" ON "categorie"("nama_categorie");
