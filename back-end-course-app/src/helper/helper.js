import nodemailer from "nodemailer";
import "dotenv/config";
import { ResponseError } from "../error/error.js";

export function timeExpired(menit) {
  const nowDate = new Date().getTime();

  return new Date(nowDate + menit * 60 * 1000);
}

export function timeExpiredDay(hari) {
  const nowDate = new Date().getTime();

  return new Date(nowDate + hari * 24 * 60 * 60 * 1000);
}

export async function sendMail(address, email) {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADMIN,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOption = {
    from: process.env.EMAIL_ADMIN,
    to: address,
    subject: "from course app",
    text: email,
  };

  try {
    await transport.sendMail(mailOption);
    return "send email success";
  } catch (error) {
    throw new ResponseError(400, error);
  }
}
