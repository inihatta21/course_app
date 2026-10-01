/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_user` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `id_user` on the `users_validate` table. All the data in the column will be lost.
  - Added the required column `email` to the `users_validate` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_email_key";

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "id_user",
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("email");

-- AlterTable
ALTER TABLE "users_validate" DROP COLUMN "id_user",
ADD COLUMN     "email" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "users_validate" ADD CONSTRAINT "users_validate_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
