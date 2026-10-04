import supertest from "supertest";
import { web } from "../src/app/web.js";
import {
  createCategorie,
  createCategorieInput,
  createCourse,
  createCourseInput,
  createMentor,
  createUsersInput,
  createUsersValidateVerifInput,
  deleteCategorie,
  deleteCourse,
  deleteMentor,
  deleteUsers,
  deleteValidate,
} from "./utils.js";

describe("GET /api/course", () => {
  beforeEach(async () => {
    await createMentor();
    await createCategorieInput(2, "software");
    await createCourseInput(2);
  });

  afterEach(async () => {
    await deleteUsers();
    await deleteValidate();
    await deleteCourse();
    await deleteMentor();
    await deleteCategorie();
  });

  it("get all course success", async () => {
    const email = "course@gmail.com";

    await createUsersInput(email);
    await createUsersValidateVerifInput(email);

    const login = supertest(web).post("/api/login").send({
      email: email,
      password: "test123",
    });

    const resultData = await supertest(web)
      .get("/api/course")
      .set({
        Authorization: `Bearer ${(await login).body.accessToken}`,
      });

    expect(resultData.status).toBe(200);
    expect(resultData.body.data[0].judul).toBe("test judul course");
    expect(resultData.body.data[0].mentor).toBe("test@gmail.com");
    expect(resultData.body.data[0].description).toBe("test description");
    expect(resultData.body.data[0].image).toBe("test image");
    expect(resultData.body.data[0].harga).toBe(99000);
    expect(resultData.body.data[0].create_at).toBeDefined();
  });

  it("get all course not found", async () => {
    const email = "course1@gmail.com";

    await createUsersInput(email);
    await createUsersValidateVerifInput(email);

    const login = supertest(web).post("/api/login").send({
      email: email,
      password: "test123",
    });

    await deleteCourse();

    const resultData = await supertest(web)
      .get("/api/course")
      .set({
        Authorization: `Bearer ${(await login).body.accessToken}`,
      });

    expect(resultData.status).toBe(404);
    expect(resultData.body.errors).toBe("course not found");
  });

  it("get all course error unauthorization", async () => {
    const resultData = await supertest(web).get("/api/course");

    expect(resultData.status).toBe(401);
    expect(resultData.body.errors).toBe("Unauthorization");
  });
});

describe("GET /api/course/categorie/:categorie", () => {
  beforeEach(async () => {
    await createMentor();
    await createCategorie();
    await createCourse();
  });

  afterEach(async () => {
    await deleteUsers();
    await deleteValidate();
    await deleteCourse();
    await deleteMentor();
    await deleteCategorie();
  });

  it("get course categorie success", async () => {
    const email = "categorie@gmail.com";

    await createUsersInput(email);
    await createUsersValidateVerifInput(email);

    const login = supertest(web).post("/api/login").send({
      email: email,
      password: "test123",
    });

    const resultData = await supertest(web)
      .get("/api/course/categorie/ui-ux")
      .set({
        Authorization: `Bearer ${(await login).body.accessToken}`,
      });

    expect(resultData.status).toBe(200);
    expect(resultData.body.data[0].id_course).toBe(1);
    expect(resultData.body.data[0].email.first_name).toBe("test");
    expect(resultData.body.data[0].email.last_name).toBe("test");
    expect(resultData.body.data[0].email.experience).toBe("profesional test");
    expect(resultData.body.data[0].judul).toBe("test judul course");
    expect(resultData.body.data[0].description).toBe("test description");
    expect(resultData.body.data[0].image).toBe("test image");
    expect(resultData.body.data[0].harga).toBe(99000);
    expect(resultData.body.data[0].create_at).toBeDefined();
  });

  it("get course categorie error Unauthorization", async () => {
    const resultData = await supertest(web).get("/api/course/categorie/ui-ux");

    expect(resultData.status).toBe(401);
    expect(resultData.body.errors).toBe("Unauthorization");
  });

  it("get course categorie error not found", async () => {
    const email = "categorie12@gmail.com";

    await createUsersInput(email);
    await createUsersValidateVerifInput(email);

    const login = supertest(web).post("/api/login").send({
      email: email,
      password: "test123",
    });

    const resultData = await supertest(web)
      .get("/api/course/categorie/software")
      .set({
        Authorization: `Bearer ${(await login).body.accessToken}`,
      });

    expect(resultData.status).toBe(404);
    expect(resultData.body.errors).toBe("categorie not found");
  });

  it("get course categorie error course not found", async () => {
    const email = "categorie1@gmail.com";

    await createUsersInput(email);
    await createUsersValidateVerifInput(email);

    const login = supertest(web).post("/api/login").send({
      email: email,
      password: "test123",
    });

    await deleteCourse();

    const resultData = await supertest(web)
      .get("/api/course/categorie/ui-ux")
      .set({
        Authorization: `Bearer ${(await login).body.accessToken}`,
      });

    expect(resultData.status).toBe(404);
    expect(resultData.body.errors).toBe("course not found");
  });
});

describe("GET /api/categorie", () => {
  beforeEach(async () => {
    await createCategorie();
  });

  afterEach(async () => {
    await deleteUsers();
    await deleteValidate();
    await deleteMentor();
    await deleteCategorie()
  });

  it("get categorie success", async () => {
    const email = "getCategorie@gmail.com";

    await createUsersInput(email);
    await createUsersValidateVerifInput(email);

    const login = supertest(web).post("/api/login").send({
      email: email,
      password: "test123",
    });

    const resultData = await supertest(web).get("/api/categorie").set({
        Authorization : `Bearer ${(await login).body.accessToken}`
    })

    expect(resultData.status).toBe(200)
    expect(resultData.body.data).toBeDefined()
  });

   it("get categorie error Unauthorization", async () => {

    const resultData = await supertest(web).get("/api/categorie")

    expect(resultData.status).toBe(401)
    expect(resultData.body.errors).toBe("Unauthorization")
  });

    it("get categorie error categorie not found", async () => {
    const email = "getCategorie1@gmail.com";

    await createUsersInput(email);
    await createUsersValidateVerifInput(email);

    const login = supertest(web).post("/api/login").send({
      email: email,
      password: "test123",
    });

    await deleteCategorie()

    const resultData = await supertest(web).get("/api/categorie").set({
        Authorization : `Bearer ${(await login).body.accessToken}`
    })

    expect(resultData.status).toBe(404)
    expect(resultData.body.errors).toBe("categorie not found")
  });
});
