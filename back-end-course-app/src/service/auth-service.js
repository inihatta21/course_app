import { prismaClient } from "../app/database.js"
import { ResponseError } from "../error/error.js"
import { sendMail, timeExpired } from "../helper/helper.js"
import { registerUserValidation } from "../validation/auth-validation.js"
import { validate } from "../validation/validation.js"
import crypto from "crypto"

async function userRegister(request) {
    const data = validate(registerUserValidation, request)

    // check email format
    if (!data.email.includes("@gmail")) {
        throw new ResponseError(400, "data yang dimasukkan tidak sesuai")
    }

    const user = await prismaClient.users.findUnique({
        where: {
            email: data.email
        },
        select : {
            email: true
        }
    })


    // check email not register
    if(user) {
        throw new ResponseError(400, "email sudah terdaftar")
    }

    // create kode
    const kode = crypto.randomInt(1000, 9999).toString()

    const createUser = await prismaClient.usersValidate.create({
        data: {
            email: data.email,
            kode: kode,
            expired_at: timeExpired(3)
        }
    })

    // create text mail
    const textMail = `kode validasi akun course_app ${kode}`

    // send mail
    const sendKode = sendMail(data.email, textMail)

    return sendKode
} 


export default {
    userRegister
}