# create database
create database db_course_app;

# create new user
create role course_app;

# hak akses crud user
grant insert, select, update, delete on all tables in schema public to course_app;

# hak akses squence user
grant usage, select on all sequences in schema public to course_app;

# hak akses crud jika suatu data dibuat oleh user lain
alter default privileges in schema public grant insert, select, update, delete on tables to course_app;

# hak akses squence jika suatu saat ada user yang merubah data
alter default privileges in schema public grant usage, select on sequences to course_app;

# memindah kepemilikan database ke user khusus
alter database db_course_app owner to course_app;

# hak login user ke dbms
alter role course_app with login;

# login sebagai user
psql --host=localhost --port=5432 --dbname=db_course_app --username=course_app --password;

# create table users
create table users
(
    id_user SERIAL NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100),

    PRIMARY KEY (id_user)
);

# create table mentor
create table mentor
(
    id_mentor SERIAL NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100),
    experience TEXT,

    PRIMARY KEY (id_mentor)
);

# create table kategori
create table kategori
(
    id_kategori SERIAL NOT NULL,
    nama_kategori VARCHAR(100),

    PRIMARY KEY (id_kategori)
);

# create table course
create table course
(
    id_course SERIAL NOT NULL,
    id_mentor INT,
    id_kategori INT,
    judul_course VARCHAR(100),
    deskripsi TEXT,
    image TEXT,
    harga INT,
    create_at TIMESTAMPTZ DEFAULT NOW(),

    PRIMARY KEY (id_course),
    CONSTRAINT fk_mentor FOREIGN KEY (id_mentor) REFERENCES mentor (id_mentor),
    CONSTRAINT fk_kategori FOREIGN KEY (id_kategori) REFERENCES kategori (id_kategori)
);

# create table materi
create table materi
(
    id_materi SERIAL NOT NULL,
    id_course INT,
    judul_materi VARCHAR(200),
    urutan INT,
    video TEXT,

    PRIMARY KEY (id_materi),
    CONSTRAINT fk_course FOREIGN KEY (id_course) REFERENCES course (id_course)
);

# create table transaksi
create table transaksi
(
    id_transaksi SERIAL NOT NULL,
    id_user INT,
    id_course INT,
    kode_transaksi VARCHAR(100),
    total_bayar INT,
    metode_pembayaran VARCHAR(100),
    status_transaksi VARCHAR(100),
    payment_url TEXT,
    create_at TIMESTAMPTZ DEFAULT NOW(),

    PRIMARY KEY (id_transaksi),
    CONSTRAINT fk_user FOREIGN KEY (id_user) REFERENCES users (id_user),
    CONSTRAINT fk_course FOREIGN KEY (id_course) REFERENCES course (id_course)
);

# create table log webhook
create table log_webhook
(
    id_log_webhook SERIAL NOT NULL,
    id_transaksi INT,
    payload TEXT,
    create_at TIMESTAMPTZ DEFAULT NOW(),

    PRIMARY KEY (id_log_webhook),
    CONSTRAINT fk_transaksi FOREIGN KEY (id_transaksi) REFERENCES transaksi (id_transaksi)
);

# create table refresh token user
create table refresh_token_user
(
    id_refresh_token_user SERIAL NOT NULL,
    id_user INT,
    token_refresh TEXT,
    ip_address VARCHAR(100),
    expired_at TIMESTAMPTZ,
    create_at TIMESTAMPTZ DEFAULT NOW(),

    PRIMARY KEY (id_refresh_token_user),
    CONSTRAINT fk_user FOREIGN KEY (id_user) REFERENCES users (id_user)
);

# create table refresh token mentor
create table refresh_token_mentor
(
    id_refresh_token_mentor SERIAL NOT NULL,
    id_mentor INT,
    token_refresh TEXT,
    ip_address VARCHAR(100),
    expired_at TIMESTAMPTZ,
    create_at TIMESTAMPTZ DEFAULT NOW(),

    PRIMARY KEY (id_refresh_token_mentor),
    CONSTRAINT fk_mentor FOREIGN KEY (id_mentor) REFERENCES mentor (id_mentor)
);

# create type enum
create type status_progress as enum ('end', 'not');

# create table user_progress
create table user_progress
(
    id_progress SERIAL NOT NULL,
    id_user INT,
    id_materi INT,
    status status_progress DEFAULT 'not',
    complete_at TIMESTAMPTZ,

    PRIMARY KEY (id_progress),
    CONSTRAINT fk_user FOREIGN KEY (id_user) REFERENCES users (id_user),
    CONSTRAINT fk_materi FOREIGN KEY (id_materi) REFERENCES materi (id_materi)
);

