-- CreateTable
CREATE TABLE "course" (
    "id_course" SERIAL NOT NULL,
    "mentor" VARCHAR(100) NOT NULL,
    "id_kategori" INTEGER NOT NULL,
    "judul" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "harga" INTEGER NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id_course")
);

-- CreateTable
CREATE TABLE "categorie" (
    "id_categorie" SERIAL NOT NULL,
    "nama_categorie" VARCHAR(50) NOT NULL,
    "image_light" TEXT,
    "image_dark" TEXT,

    CONSTRAINT "categorie_pkey" PRIMARY KEY ("id_categorie")
);

-- CreateTable
CREATE TABLE "mentor" (
    "email" VARCHAR(100) NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "password" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "profile" TEXT,

    CONSTRAINT "mentor_pkey" PRIMARY KEY ("email")
);
