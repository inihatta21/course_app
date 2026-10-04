import express from "express"
import courseController from "../controller/course-controller.js"

const courseRouter = express.Router()

courseRouter.get("/api/course", courseController.getAllCourse)
courseRouter.get("/api/course/categorie/:categorie", courseController.getCourseCategorie)
courseRouter.get("/api/categorie", courseController.getCategorie)

export {
    courseRouter
}