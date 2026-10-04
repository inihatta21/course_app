import supertest from "supertest";
import { web } from "../src/app/web.js";
import {
  createUsers,
  createUsersInput,
  createUsersRefreshToken,
  createUsersRefreshTokenExpired,
  createUsersTest,
  createUsersValidate,
  createUsersValidateExpried,
  createUsersValidateVerif,
  createUsersValidateVerifInput,
  deleteRefreshToken,
  deleteUsers,
  deleteValidate,
} from "./utils.js";

describe("POST /api/register", () => {
  beforeEach(async () => {
    await createUsers();
  });

  afterEach(async () => {
    await deleteValidate();
    await deleteUsers();
    await deleteRefreshToken();
  });

  it("register user success", async () => {
    await deleteUsers();
    const resultData = await supertest(web).post("/api/register").send({
      email: "test@gmail.com",
    });

    expect(resultData.status).toBe(200);
    expect(resultData.body.message).toBe(
      "register success! send email success",
    );
    expect(resultData.body.id_user_validate).toBeDefined();
  }, 9000);

  it("register user email is not valid format", async () => {
    const resultData = await supertest(web).post("/api/register").send({
      email: "hhatta421",
    });

    expect(resultData.status).toBe(400);
    expect(resultData.body.errors).toBe("data yang dimasukkan tidak sesuai");
  });

  it("register user email is already exist", async () => {
    const resultData = await supertest(web).post("/api/register").send({
      email: "hhatta421@gmail.com",
    });

    expect(resultData.status).toBe(400);
    expect(resultData.body.errors).toBe("email sudah terdaftar");
  });
});

describe("POST /api/validate-kode", () => {
  beforeEach(async () => {
    await createUsersValidate();
  });

  afterEach(async () => {
    await deleteValidate();
  });

  it("verifikasi kode user success", async () => {
    const resultData = await supertest(web).post("/api/validate-kode").send({
      id_user_validate: 1,
      first_name: "test",
      last_name: "test",
      password: "test123",
      kode: "1234",
    });

    expect(resultData.status).toBe(200);
    expect(resultData.body.message).toBe("verifikasi dan register success");
    expect(resultData.body.user).toBe("test@gmail.com");
  });

  it("verifikasi kode user is expired", async () => {
    await createUsersValidateExpried();

    const resultData = await supertest(web).post("/api/validate-kode").send({
      id_user_validate: 2,
      first_name: "test",
      last_name: "test",
      password: "test123",
      kode: "4321",
    });

    expect(resultData.status).toBe(400);
    expect(resultData.body.errors).toBe("kode otp tidak valid");
  });

  it("verifikasi kode user not valid", async () => {
    const resultData = await supertest(web).post("/api/validate-kode").send({
      id_user_validate: 1,
      first_name: "test",
      last_name: "test",
      password: "test123",
      kode: "1354",
    });

    expect(resultData.status).toBe(400);
    expect(resultData.body.errors).toBe("kode otp tidak valid");
  });

  it("verifikasi user not found", async () => {
    const resultData = await supertest(web).post("/api/validate-kode").send({
      id_user_validate: 4,
      first_name: "test",
      last_name: "test",
      password: "test123",
      kode: "1234",
    });

    expect(resultData.status).toBe(404);
    expect(resultData.body.errors).toBe("user not found");
  });
});

describe("POST /api/login", () => {
  beforeEach(async () => {
    await createUsers();
    await createUsersValidateVerif();
  });

  afterEach(async () => {
    await deleteUsers();
    await deleteValidate();
  });

  it("login user success", async () => {
    const resultData = await supertest(web).post("/api/login").send({
      email: "test@gmail.com",
      password: "test123",
    });

    expect(resultData.status).toBe(200);
    expect(resultData.body.accessToken).toBeDefined();
    expect(resultData.body.refreshToken).toBeDefined();
    expect(resultData.body.message).toBe("login success");
  });

  it("login user error email wrong", async () => {
    const resultData = await supertest(web).post("/api/login").send({
      email: "salah@gmail.com",
      password: "test123",
    });

    expect(resultData.status).toBe(404);
    expect(resultData.body.errors).toBe("email/password salah");
  });

  it("login user error password wrong", async () => {
    const resultData = await supertest(web).post("/api/login").send({
      email: "test@gmail.com",
      password: "test",
    });

    expect(resultData.status).toBe(404);
    expect(resultData.body.errors).toBe("email/password salah");
  });

  it("login user error account not verifikasi", async () => {
    await createUsersValidateExpried();
    const resultData = await supertest(web).post("/api/login").send({
      email: "test123@gmail.com",
      password: "test123",
    });

    expect(resultData.status).toBe(404);
    expect(resultData.body.errors).toBe("email/password salah");
  });
});

describe("DELETE /api/logout", () => {
  beforeEach(async () => {
    await createUsersInput("test123@gmail.com");
    await createUsersValidateVerifInput("test123@gmail.com");
  });

  afterEach(async () => {
    await deleteRefreshToken();
    await deleteUsers();
    await deleteValidate();
  });

  it("logout user success", async () => {
    const login = supertest(web).post("/api/login").send({
      email: "test123@gmail.com",
      password: "test123",
    });

    console.log((await login).body);

    const logout = await supertest(web)
      .delete("/api/logout")
      .send({
        refresh_token: (await login).body.refreshToken,
      })
      .set({
        Authorization: `Bearer ${(await login).body.accessToken}`,
      });

    expect(logout.status).toBe(200);
  });
});

describe("POST /api/validate-kode/update", () => {
  beforeEach(async () => {
    await createUsersValidateVerifInput("hhatta421@gmail.com");
  });

  afterEach(async () => {
    await deleteValidate();
  });

  it("update kode user success", async () => {
    const resultData = await supertest(web)
      .post("/api/validate-kode/update")
      .send({
        email: "hhatta421@gmail.com",
      });

    expect(resultData.status).toBe(200);
    expect(resultData.body.message).toBe("send email success");
  }, 7000);

  it("update kode user error email not format", async () => {
    const resultData = await supertest(web)
      .post("/api/validate-kode/update")
      .send({
        email: "salah",
      });

    expect(resultData.status).toBe(400);
    expect(resultData.body.errors).toBe("email salah");
  });

  it("update kode user error email not found", async () => {
    const resultData = await supertest(web)
      .post("/api/validate-kode/update")
      .send({
        email: "salah@gmail.com",
      });

    expect(resultData.status).toBe(400);
    expect(resultData.body.errors).toBe("email salah");
  });

   it("update kode user error email blank", async () => {
    const resultData = await supertest(web)
      .post("/api/validate-kode/update")
      .send({
        email: "",
      });

    expect(resultData.status).toBe(400);
    expect(resultData.body.errors).toBeDefined();
  });
});


describe("POST /api/update/token", () => {
    beforeEach(async () => {
        await createUsersInput("test@gmail.com")
        await createUsersRefreshToken()
        await createUsersRefreshTokenExpired()
    })

    afterEach(async () => {
        await deleteUsers()
        await deleteRefreshToken()
    })

    it("update access token success", async () => {
        const resultData = await supertest(web).post("/api/update/token").send({
            email: "test@gmail.com",
            refresh_token: "test"
        })

        expect(resultData.status).toBe(200)
        expect(resultData.body.accessToken).toBeDefined()
    })

    it("update access token error user not found ", async () => {
        const resultData = await supertest(web).post("/api/update/token").send({
            email: "salah@gmail.com",
            refresh_token: "test"
        })

        expect(resultData.status).toBe(404)
        expect(resultData.body.errors).toBe("user not found")
    })

    it("update access token error token not found ", async () => {
        const resultData = await supertest(web).post("/api/update/token").send({
            email: "test@gmail.com",
            refresh_token: "salah"
        })

        expect(resultData.status).toBe(404)
        expect(resultData.body.errors).toBe("token not found")
    })

     it("update access token error token not found ", async () => {
        const resultData = await supertest(web).post("/api/update/token").send({
            email: "test@gmail.com",
            refresh_token: "expired"
        })

        expect(resultData.status).toBe(400)
        expect(resultData.body.errors).toBe("token tidak valid")
    })
    
})