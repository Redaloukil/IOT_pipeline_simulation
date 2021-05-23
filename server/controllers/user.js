const userSevice = require('../services/user');

module.exports = {
    getUserById: async (req, res, next)=> {
        const user = await userSevice.getUserById(req.params.id);
        if (user) {
            return res.status(200).send(user);
        }
        return res.status.send({message:"Ressource not found"});
    },
    createUser: async (req, res, next ) => {
        const {username , password} = req.body;
        console.log(req.body);
        const user = await userSevice.createUser({username,password});
        if (user) {
            return res.status(201).send(user);
        }
        return res.status(401).send({message:"Ressource could not be created"});
    },
}