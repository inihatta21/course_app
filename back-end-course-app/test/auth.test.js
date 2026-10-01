import supertest from "supertest";
import { web } from "../src/app/web.js";
import { createUsers, deleteUsers, deleteValidate } from "./utils.js";

describe("POST /api/register", () => {

    beforeEach(async () => {
        await createUsers()
    })

    afterEach(async () => {
        await deleteValidate()
        await deleteUsers()
    })

  it("register user success", async () => {
    await deleteUsers()
    const resultData = await supertest(web).post("/api/register").send({
      email: "hhatta421@gmail.com",
    });

    expect(resultData.status).toBe(200)
    expect(resultData.body.message).toBe("register success! send email success")
  });

  it("register user email is not valid format",async () => {
    const resultData = await supertest(web).post("/api/register").send({
      email: "hhatta421",
    });

    expect(resultData.status).toBe(400)
    expect(resultData.body.errors).toBe("data yang dimasukkan tidak sesuai")
  })

  it("register user email is already exist", async () => {
    const resultData = await supertest(web).post("/api/register").send({
      email: "hhatta421@gmail.com",
    });

    expect(resultData.status).toBe(400)
    expect(resultData.body.errors).toBe("email sudah terdaftar")
 
  })
});
