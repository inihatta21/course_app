import express from "express";
import authController from "../controller/auth-controller.js";

const authRouter = express.Router();

authRouter.post("/api/register", authController.registerUser);
authRouter.post("/api/validate-kode", authController.kodeOtpUser);
authRouter.post("/api/login", authController.loginUser)
authRouter.post("/api/validate-kode/update", authController.updateKode)
authRouter.post("/api/update/token", authController.updateAccessToken)


export { authRouter };
