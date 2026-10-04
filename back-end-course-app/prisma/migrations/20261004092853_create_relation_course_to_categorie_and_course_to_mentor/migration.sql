/*
  Warnings:

  - You are about to drop the column `id_kategori` on the `course` table. All the data in the column will be lost.
  - Added the required column `id_categorie` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "course" DROP COLUMN "id_kategori",
ADD COLUMN     "id_categorie" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_mentor_fkey" FOREIGN KEY ("mentor") REFERENCES "mentor"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_id_categorie_fkey" FOREIGN KEY ("id_categorie") REFERENCES "categorie"("id_categorie") ON DELETE RESTRICT ON UPDATE CASCADE;
