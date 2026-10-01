import { prismaClient } from "../src/app/database";

export async function deleteValidate() {
    return await prismaClient.usersValidate.deleteMany()
}

export async function createUsers() {
    return await prismaClient.users.create({
        data: {
            first_name: "test",
            last_name: "test",
            email: "hhatta421@gmail.com",
            password: "test123"
        }
    })
}

export async function deleteUsers() {
    return await prismaClient.users.deleteMany()
}