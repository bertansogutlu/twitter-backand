require('dotenv').config()

PORT = process.env.PORT || 4000
NODE_ENV = process.env.NODE_ENV || "development"
JWT_SECRET = process.env.SECRET || "hede"
ADMIN_PASSWORD = process.env.PASSWORD || 1234



module.exports = {
    PORT,
    NODE_ENV,
    JWT_SECRET,
    ADMIN_PASSWORD
}