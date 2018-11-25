const jwtHandler = require('./jwt/jwtHandler')

module.exports = {
    name: 'jwt-header',
    policy: (actionParams) => {
        return (req, res, next) => {
            console.log('Header:')
            console.log(req.get('authorization'))
            console.log('actionparams:')
            console.log(actionParams)
            console.log(req.get('authorization'))
            if (req.get('authorization') && jwtHandler.verify(req.get('authorization'))) {
                if (jwtHandler.hasRole(req.get('authorization'), actionParams.role)) {
                    next()
                } else {
                    res.status(401).json({
                        state: false,
                        description: 'Role missing'
                    })
                }
            } else {
                res.status(401).json({
                    state: false,
                    description: 'Token expired'
                })

            };
        }
    },
}