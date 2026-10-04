import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/error.js";
import { getCourseCategorieValidation } from "../validation/course-validation.js";
import { validate } from "../validation/validation.js";

async function getAllCourse() {
    const course = await prismaClient.course.findMany()

    // check course
    if(course.length === 0) {
        throw new ResponseError(404, "course not found")
    }

    return course
}

async function getCourseCategorie(params) {
    const data = validate(getCourseCategorieValidation, params)

    const categorie = await prismaClient.categorie.findFirst({
        where: {
            nama_categorie: data
        }, select: {
            id_categorie: true
        }
    })

    // check kategorie
    if(!categorie) {
        throw new ResponseError(404, "categorie not found")
    }

    const course = await prismaClient.course.findMany({
        where: {
            id_categorie : categorie.id_categorie
        }, include: {
            email: {
                select: {
                    first_name: true,
                    last_name: true,
                    experience: true,
                    profile: true
                }
            }
        }
    })

    // check course
    if(course.length === 0) {
        throw new ResponseError(404, "course not found")
    }

    return course
}

async function getCategorie() {
    const data = await prismaClient.categorie.findMany()

    // check categorie
    if(data.length === 0) {
        throw new ResponseError(404, "categorie not found")
    }

    return data
}

export default {
    getAllCourse,
    getCourseCategorie,
    getCategorie
};
