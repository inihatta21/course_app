import jwt from "jsonwebtoken"
import "dotenv/config"


export function authMiddleware(req, res, next) {
    const header = req.get("Authorization")
    const token = header && header.split(' ')[1]

    if(!token) {
        res.status(401).json({
            errors: "Unauthorization"
        })
    } else {
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                res.status(401).json({
                    errors: "Unauthorization"
                })
            }
            req.user = user
            next()
        })
    }
}