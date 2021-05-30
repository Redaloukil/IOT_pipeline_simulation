const userSevice = require('../services/user');

module.exports = {
    getAllUsers: async (req, res, next)=> {
        const users = await userSevice.getAllUsers();
        if (users) {
            return res.status(200).send(users);
        }
        return res.status(404).send({message:"Ressource not found"});
    },
    getUserById: async (req, res, next)=> {
        const user = await userSevice.getUserById(req.params.id);
        if (user) {
            return res.status(200).send(user);
        }
        return res.status(404).send({message:"Ressource not found"});
    },
    createUser: async (req, res, next) => {
        const {username , password} = req.body;
        console.log(req.body , username , password);
        const user = await userSevice.createUser({username,password});
        if (user) {
            return res.status(201).send(user);
        }
        return res.status(401).send({message:"Ressource could not be created"});
    },
    loginUser : async (req, res, next) => {
        const {username, password} = req.body;
        const user = await userSevice.loginUser({username,password});
        if(user){
            return res.status(200).send(user);
        }
        return res.status(401).send({message:"Could not login with these credentials"});
    }
}