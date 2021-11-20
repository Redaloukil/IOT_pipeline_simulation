const userAccess = require('../services/user-access');
const {User} = require('../models/user');

module.exports = {
    isAuthenticated:(req,res,next) => {
        const {authorization} = req.headers;
        if(!authorization) {
            return res.status(401).send({message:"you shoud authenticated"});
        }
        const user = userAccess.verify(authorization);
        if(!user){
            return res.status(401).send({message:"you shoud be authenticated"});
        }

        next();
    },  
}