-- CreateTable
CREATE TABLE "users_token_refresh" (
    "id_refresh_token_user" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "expired_at" TIMESTAMP(3) NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_token_refresh_pkey" PRIMARY KEY ("id_refresh_token_user")
);
