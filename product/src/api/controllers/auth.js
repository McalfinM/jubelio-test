const jwt = require('jsonwebtoken')

exports.login = (request,h) => {
    const username = "testing"
    const password = "password"
    let json = {
        access_token:""
    }
   
    return jwt.sign({ username: username }, "jwt_secrete", { algorithm: "HS256",keyid: "sim2" })

    
}