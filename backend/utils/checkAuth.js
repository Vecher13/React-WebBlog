import jwt from 'jsonwebtoken';
import * as dotenv from "dotenv";
dotenv.config();

export default (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.CRYPTO_SALT);

            req.userId = decoded._id;
            next();
        } catch(e) {
             return res.status(403).json({
               message: "Нет доступа!",
             });
        }
    } else {
        return res.status(403).json({
            message: "Нет доступа!!",
        });
    }

};