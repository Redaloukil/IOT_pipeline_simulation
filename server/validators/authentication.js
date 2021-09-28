const jwt = require('jsonwebtoken');

module.exports = {
    authentication : (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const token = authHeader.split(' ')[1];
            jwt.verify(token, "hello world", (err, user) => {
                if (err) {
                    return res.status(401).send({message:"unabled to authenticate"});
                }
                req.user = user;
                next();
            });

        } else {
            res.sendStatus(401);
        }
    }   
}