require('dotenv').config()

PORT = process.env.PORT || 4000
NODE_ENV = process.env.NODE_ENV || "development"
JWT_SECRET = process.env.SECRET || "hede"



module.exports = {
    PORT,
    NODE_ENV,
    JWT_SECRET
}