-- CreateEnum
CREATE TYPE "StatusValidate" AS ENUM ('verifikasi', 'not_verifikasi');

-- CreateTable
CREATE TABLE "users_validate" (
    "id_user_validate" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "kode" VARCHAR(4) NOT NULL,
    "status" "StatusValidate" NOT NULL DEFAULT 'verifikasi',
    "expired_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_validate_pkey" PRIMARY KEY ("id_user_validate")
);
