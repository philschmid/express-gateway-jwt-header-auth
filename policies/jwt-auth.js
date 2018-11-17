module.exports = {
    name: 'jwt-header',
    policy: (actionParams) => {
        return (req, res, next) => {
            if (req.get('Authorization') == actionParams.role) {
                next();
            } else {
                res.status(401).send('war nichts')
            }


        };
    }
};