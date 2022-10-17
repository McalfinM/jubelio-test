const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
exports.login = (request,h) => {
    const username = "testing"
    const password = "password"
    let json = {
        access_token:""
    }
   
    return jwt.sign({ username: username }, process.env.JWT_SECRETE || "jwt_secrete", { algorithm: "HS256",keyid: "sim2" })

    
}