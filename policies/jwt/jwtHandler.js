var jwt = require('jsonwebtoken');
const fs = require('fs')
const publicKey = fs.readFileSync('./Public.key')

//TODO: Keine Promise returnen
class jwtHandler {
    constructor() {
        this.errorHandler = (reject, err) => {
            // TODO: an MessageQue senden und loggen
            // TODO: implementieren irgendwann
            console.log('some call to log attempt');
            reject(err)
        }
    }
    verify(token) {
        return jwt.verify(token, publicKey, (err, decoded) => {
            if (decoded.exp >= Math.floor(new Date() / 1000)) return true
            return false
        })
    }

    hasRole(token, role) {
        return jwt.verify(token, publicKey, (err, decoded) => {
            if (decoded.role.includes(role)) return true
            return false
        })
    }
}

module.exports = new jwtHandler()