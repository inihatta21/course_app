import express from "express";
import authController from "../controller/auth-controller.js";

export const logoutRouter = express.Router();

logoutRouter.delete("/api/logout", authController.logout)