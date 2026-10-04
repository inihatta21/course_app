import supertest from "supertest";
import { web } from "../src/app/web.js";
import {
  createUsers,
  createUsersRefreshToken,
  createUsersTest,
  createUsersValidate,
  createUsersValidateExpried,
  createUsersValidateVerif,
  deleteRefreshToken,
  deleteUsers,
  deleteValidate,
} from "./utils.js";

describe("DELETE /api/logout", () => {
  beforeEach(async () => {
    await createUsersTest();
    await createUsersValidateVerif();
  });

  afterEach(async () => {
    await deleteRefreshToken();
    await deleteUsers();
    await deleteValidate();
  });

  it("logout user success", async () => {

    const login = await supertest(web).post("/api/login").send({
      email: "test@gmail.com",
      password: "test123"
    })

    const logout = await supertest(web)
      .delete("/api/logout")
      .send({
        refresh_token: login.body.refreshToken,
      })
      .set({
        Authorization: `Bearer ${login.body.accessToken}`,
      });

    expect(logout.status).toBe(200);
    expect(logout.body.message).toBe("logout success")
  });

    it("logout user Unauthorization token invalid", async () => {

    const login = await supertest(web).post("/api/login").send({
      email: "test@gmail.com",
      password: "test123"
    })

    const logout = await supertest(web)
      .delete("/api/logout")
      .send({
        refresh_token: login.body.refreshToken,
      })
      .set({
        Authorization: `Bearer `,
      });

    expect(logout.status).toBe(401);
    expect(logout.body.errors).toBe("Unauthorization")
  });

    it("logout user Unauthorization header not found", async () => {

    const login = await supertest(web).post("/api/login").send({
      email: "test@gmail.com",
      password: "test123"
    })

    const logout = await supertest(web)
      .delete("/api/logout")
      .send({
        refresh_token: login.body.refreshToken,
      })

    expect(logout.status).toBe(401);
    expect(logout.body.errors).toBe("Unauthorization")
  });

    it("logout user Unathorization refresh token not found", async () => {

    const login = await supertest(web).post("/api/login").send({
      email: "test@gmail.com",
      password: "test123"
    })

    const logout = await supertest(web)
      .delete("/api/logout")
      .send({
        refresh_token: "salah",
      })
      .set({
        Authorization: `Bearer ${login.body.accessToken}`,
      });

    expect(logout.status).toBe(404);
    expect(logout.body.errors).toBe("token not found")
  });
});
