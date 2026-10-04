import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/error.js";
import { sendMail, timeExpired, timeExpiredDay } from "../helper/helper.js";
import {
  kodeOtpUserValidation,
  loginUserValidation,
  logoutValidation,
  registerUserValidation,
  updateAccessTokenValidation,
  updateKodeValidation,
} from "../validation/auth-validation.js";
import { validate } from "../validation/validation.js";
import crypto from "crypto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

async function userRegister(request) {
  const data = validate(registerUserValidation, request);

  // check email format
  if (!data.email.includes("@gmail")) {
    throw new ResponseError(400, "data yang dimasukkan tidak sesuai");
  }

  const user = await prismaClient.users.findUnique({
    where: {
      email: data.email,
    },
    select: {
      email: true,
    },
  });

  // check email not register
  if (user) {
    throw new ResponseError(400, "email sudah terdaftar");
  }

  // create kode
  const kode = crypto.randomInt(1000, 9999).toString();

  const createUser = await prismaClient.usersValidate.create({
    data: {
      email: data.email,
      kode: kode,
      expired_at: timeExpired(3),
    },
    select: {
      id_user_validate: true,
    },
  });

  // create text mail
  const textMail = `kode validasi akun course_app ${kode}`;

  // send mail
  const sendKode = sendMail(data.email, textMail);

  return {
    send_kode: await sendKode,
    id_user_validate: createUser.id_user_validate,
  };
}

async function kodeOtpUser(request) {
  const data = validate(kodeOtpUserValidation, request);

  const validate_user = await prismaClient.usersValidate.findUnique({
    where: {
      id_user_validate: data.id_user_validate,
    },
    select: {
      kode: true,
      expired_at: true,
    },
  });

  // check id
  if (!validate_user) {
    throw new ResponseError(404, "user not found");
  }

  // check valid kode
  if (data.kode !== validate_user.kode) {
    throw new ResponseError(400, "kode otp tidak valid");
  }

  // check expired code
  if (new Date() > validate_user.expired_at) {
    throw new ResponseError(400, "kode otp tidak valid");
  }

  // verifikasi user
  const user_verifikasi = await prismaClient.usersValidate.update({
    where: {
      id_user_validate: data.id_user_validate,
    },
    data: {
      status: "VERIFIKASI",
    },
    select: {
      email: true,
    },
  });

  // hashing password
  const user_password = await bcrypt.hash(data.password, 10);

  // insert user
  const user = await prismaClient.users.create({
    data: {
      first_name: data.first_name,
      last_name: data.last_name,
      email: user_verifikasi.email,
      password: user_password,
    },
    select: {
      email: true,
    },
  });

  return { message: "verifikasi dan register success", user: user.email };
}

async function loginUser(request) {
  const data = validate(loginUserValidation, request);

  const account = await prismaClient.usersValidate.findFirst({
    where: {
      email: data.email,
    },
    select: {
      email: true,
      status: true,
    },
  });

  // check account
  if (!account) {
    throw new ResponseError(404, "email/password salah");
  }

  // check status akun
  if (account.status !== "VERIFIKASI") {
    throw new ResponseError(404, "email/password salah");
  }

  const user = await prismaClient.users.findUnique({
    where: {
      email: data.email,
    },
  });

  // check user
  if (!user) {
    throw new ResponseError(404, "email/password salah");
  }

  const password = await bcrypt.compare(data.password, user.password);

  // check password
  if (!password) {
    throw new ResponseError(404, "email/password salah");
  }

  // create token
  const access_token = jwt.sign(account, process.env.SECRET_KEY, {
    expiresIn: "30s",
  });
  const refresh_token = jwt.sign(account, process.env.REFRESH_SECRET_KEY);

  // insert refresh token
  const save_refresh_token = await prismaClient.usersTokenRefresh.create({
    data: {
      token: refresh_token,
      expired_at: timeExpiredDay(2),
      create_at: new Date(),
    },
    select: {
      token: true,
    },
  });

  return {
    access_token: access_token,
    refresh_token: save_refresh_token.token,
  };
}

async function logout(request) {
  const data = validate(logoutValidation, request);

  const token = await prismaClient.usersTokenRefresh.findFirst({
    where: {
      token: data.refresh_token,
    },
    select: {
      id_refresh_token_user: true,
    },
  });

  // check token
  if (!token) {
    throw new ResponseError(404, "token not found");
  }

  // delete token
  const delete_token = await prismaClient.usersTokenRefresh.delete({
    where: {
      id_refresh_token_user: token.id_refresh_token_user,
    },
  });

  return "logout success";
}

async function updateKode(request) {
  const data = validate(updateKodeValidation, request);

  // check email format
  if (!data.email.includes("@gmail")) {
    throw new ResponseError(400, "email salah");
  }

  const user = await prismaClient.usersValidate.findFirst({
    where: {
      email: data.email,
    },
    select: {
      id_user_validate: true,
    },
  });

  // check email
  if (!user) {
    throw new ResponseError(400, "email salah");
  }

  // create kode
  const kode = crypto.randomInt(1000, 9999).toString();

  // update table users_validate
  const update_kode = await prismaClient.usersValidate.update({
    where: {
      id_user_validate: user.id_user_validate,
    },
    data: {
        kode: kode,
        expired_at: timeExpired(2)
    },
  });

  // create text mail
  const textMail = `kode validasi akun course_app ${kode}`;

  return sendMail(data.email, textMail)
}

async function updateAccessToken(request) {
  const data = validate(updateAccessTokenValidation, request);

  const user = await prismaClient.users.findUnique({
    where: {
      email: data.email,
    },
    select: {
      email: true,
    },
  });

  // check user
  if (!user) {
    throw new ResponseError(404, "user not found");
  }

  const token = await prismaClient.usersTokenRefresh.findFirst({
    where: {
      token: data.refresh_token,
    },
    select: {
      id_refresh_token_user: true,
      expired_at: true,
    },
  });

  // check token
  if (!token) {
    throw new ResponseError(404, "token not found");
  }

  // check expired token
  if (token.expired_at < new Date()) {
    throw new ResponseError(400, "token tidak valid");
  }

  // create token
  const access_token = jwt.sign(user, process.env.SECRET_KEY, {
    expiresIn: "30s",
  });

  return access_token
}

export default {
  userRegister,
  kodeOtpUser,
  loginUser,
  logout,
  updateKode,
  updateAccessToken
};
