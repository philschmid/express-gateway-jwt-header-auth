const jwtHandler = require('./jwt/jwtHandler')

module.exports = {
    name: 'jwt-header',
    policy: (actionParams) => {
        return (req, res, next) => {
            console.log('Header:')
            console.log(req.get('Authorization'))
            console.log('Actionparams:')
            console.log(actionParams)
            jwtHandler.verify(token).then((val) => {
                if (val) {
                    jwtHandler.hasRole(req.get('Authorization'), actionParams.role).then((value) => {
                        if (value) {
                            next()
                        } else {
                            res.status(401).send(JSON.stringify({
                                state: false,
                                description: 'Role missing'
                            }))
                        }
                    })
                } else {
                    res.status(401).send(JSON.stringify({
                        state: false,
                        description: 'Token expired'
                    }))

                }
            })
        };
    }
};