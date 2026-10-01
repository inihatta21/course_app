import authService from "../service/auth-service.js"

async function registerUser(req, res, next) {
    try {
        const resultData = await authService.userRegister(req.body)

        res.status(200).json({
            message: `register success! ${resultData}` 
        })
    } catch (error) {
        next(error)
    }
}

export default {
    registerUser
}