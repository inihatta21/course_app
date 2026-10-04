import courseService from "../service/course-service.js";

async function getAllCourse(req, res, next) {
  try {
    const resultData = await courseService.getAllCourse();

    res.status(200).json({
      data: resultData,
    });
  } catch (error) {
    next(error);
  }
}

async function getCourseCategorie(req, res, next) {
  try {
    const resultData = await courseService.getCourseCategorie(
      req.params.categorie,
    );

    res.status(200).json({
      data: resultData,
    });
  } catch (error) {
    next(error);
  }
}

async function getCategorie(req, res, next) {
  try {
    const resultData = await courseService.getCategorie()

    res.status(200).json({
      data: resultData
    })
  } catch (error) {
    next(error)
  }
}

export default {
  getAllCourse,
  getCourseCategorie,
  getCategorie
};
