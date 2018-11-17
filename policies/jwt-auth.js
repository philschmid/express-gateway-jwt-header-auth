const jwtHandler = require('./jwt/jwtHandler')

module.exports = {
    name: 'jwt-header',
    policy: (actionParams) => {
        return (req, res, next) => {
            if(jwtHandler.verify(req.get('Authorization'))) {
                if(jwtHandler.hasRole(req.get('Authorization'),actionParams.role)) {
                    next();
                } else {
                    res.status(401).send(JSON.stringify({ state: false, description:'Role missing' }))
                }
            } else {
                res.status(401).send(JSON.stringify({ state: false, description:'Token expired' }))
            }
        };
    }
};