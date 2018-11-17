var jwt = require('jsonwebtoken');
const fs = require('fs')
const publicKey = fs.readFileSync('./Public.key')

class jwtHandler {
    constructor() {
        this.errorHandler = (reject, err) => {
            // TODO: an MessageQue senden und loggen
            console.log('some call to log attempt');
            reject(err)
        }
    }
    verify(token) {
        return new Promise(function (resolve, reject) {
            jwt.verify(token, publicKey, (err, decoded) => {
                if (err) this.errorHandler(reject, err)
                if (decoded.exp <= Math.floor(new Date() / 1000)) reject(new Error('Token expired'))
                resolve(true)
            })
        }.bind(this))
    }
    hasRole(token,role) {
        return new Promise(function (resolve, reject){
            jwt.verify(token, publicKey, (err,decoded) => {
                if(err)this.errorHandler(reject,err)
                if (decoded.role.includes(role)){
                    resolve(true)
                }
            })
        })
    }
}

module.exports = new jwtHandler()