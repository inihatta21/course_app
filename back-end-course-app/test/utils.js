import supertest from "supertest";
import { prismaClient } from "../src/app/database";
import { timeExpired, timeExpiredDay } from "../src/helper/helper";
import bcrypt from "bcrypt"
import { web } from "../src/app/web";

export async function deleteValidate() {
    return await prismaClient.usersValidate.deleteMany()
}

export async function createUsers() {
    return await prismaClient.users.create({
        data: {
            first_name: "test",
            last_name: "test",
            email: "hhatta421@gmail.com",
            password: await bcrypt.hash("test123", 10)
        }
    })
}


export async function createUsersInput(email) {
    return await prismaClient.users.create({
        data: {
            first_name: "test",
            last_name: "test",
            email: email,
            password: await bcrypt.hash("test123", 10)
        }
    })
}

export async function createUsersTest() {
    return await prismaClient.users.create({
        data: {
            first_name: "test",
            last_name: "test",
            email: "test@gmail.com",
            password: await bcrypt.hash("test123", 10)
        }
    })
}

export async function createUsersValidate() {
    return await prismaClient.usersValidate.create({
        data: {
            id_user_validate: 1,
            email: "test@gmail.com",
            kode: "1234",
            expired_at: timeExpired(2)
        }
    })
}

export async function createUsersValidateVerif() {
    return await prismaClient.usersValidate.create({
        data: {
            id_user_validate: 1,
            email: "test@gmail.com",
            kode: "1234",
            status: "VERIFIKASI",
            expired_at: timeExpired(2)
        }
    })
}

export async function createUsersValidateVerifInput(email) {
    return await prismaClient.usersValidate.create({
        data: {
            id_user_validate: 1,
            email: email,
            kode: "1234",
            status: "VERIFIKASI",
            expired_at: timeExpired(2)
        }
    })
}

export async function createUsersValidateExpried() {
    return await prismaClient.usersValidate.create({
        data: {
            id_user_validate: 2,
            email: "test123@gmail.com",
            kode: "4321",
            expired_at: new Date()
        }
    })
}

export async function createUsersRefreshToken() {
    return await prismaClient.usersTokenRefresh.create({
        data: {
            id_refresh_token_user: 1,
            token: "test",
            expired_at: timeExpiredDay(2),
            create_at: new Date()
        }
    })
}

export async function createUsersRefreshTokenExpired() {
    return await prismaClient.usersTokenRefresh.create({
        data: {
            id_refresh_token_user: 2,
            token: "expired",
            expired_at: new Date(),
            create_at: new Date()
        }
    })
}

export async function loginUser(email) {
    const login = await supertest(web).post("/api/login").send({
        email: email,
        password: "test123"
    })

    return login.body
}

export async function createMentor() {
    return await prismaClient.mentor.create({
        data: {
            first_name: "test",
            last_name: "test",
            email: "test@gmail.com",
            password: await bcrypt.hash("test123", 10),
            experience: "profesional test",
        }
    })
}

export async function createCategorieInput(id, name) {
    return await prismaClient.categorie.create({
        data: {
            id_categorie: id,
            nama_categorie: name,
            image_dark: "test",
            image_light: "test"
        }
    })
}

export async function createCategorie() {
    return await prismaClient.categorie.create({
        data: {
            id_categorie: 1,
            nama_categorie: "ui-ux",
            image_dark: "test",
            image_light: "test"
        }
    })
}

export async function createCourse() {
    return await prismaClient.course.create({
        data: {
            id_course: 1,
            id_categorie: 1,
            judul: "test judul course",
            mentor: "test@gmail.com",
            description: "test description",
            image: "test image",
            harga: 99000,
            create_at: new Date()
        }
    })
}

export async function createCourseInput(id_categorie) {
    return await prismaClient.course.create({
        data: {
            id_course: 1,
            id_categorie: id_categorie,
            judul: "test judul course",
            mentor: "test@gmail.com",
            description: "test description",
            image: "test image",
            harga: 99000,
            create_at: new Date()
        }
    })
}

export async function deleteCourse() {
    return await prismaClient.course.deleteMany()
}

export async function deleteMentor() {
    return await prismaClient.mentor.deleteMany()
}

export async function deleteCategorie() {
    return await prismaClient.categorie.deleteMany()
}

export async function deleteUsers() {
    return await prismaClient.users.deleteMany()
}

export async function deleteRefreshToken() {
    return await prismaClient.usersTokenRefresh.deleteMany()
}