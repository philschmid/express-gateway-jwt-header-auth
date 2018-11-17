const jwtHandler = require('./jwt/jwtHandler')

module.exports = {
    name: 'jwt-header',
    policy: (actionParams) => {
        return (req, res, next) => {
            console.log('Header:')
            console.log(req.get('Authorization'))
            console.log('Actionparams:')
            console.log(actionParams)
            console.log(req.get('Authorization'))
            if (req.get('Authorization') && jwtHandler.verify(req.get('Authorization'))) {
                if (jwtHandler.hasRole(req.get('Authorization'), actionParams.role)) {
                    next()
                } else {
                    res.status(401).send(JSON.stringify({
                        state: false,
                        description: 'Role missing'
                    }))
                }
            } else {
                res.status(401).send(JSON.stringify({
                    state: false,
                    description: 'Token expired'
                }))

            };
        }
    },
}