/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `users_token_refresh` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "users_token_refresh_token_key" ON "users_token_refresh"("token");
