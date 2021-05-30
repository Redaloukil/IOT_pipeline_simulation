const {User} = require('../models/user');



module.exports = {
    getAllUsers: async() => {
        try {
            const users = await User.find({});
            return users
        } catch(e) {
            return null;
        }
    },
    getUserById: async (id)=> {
        try {
            const user = await User.find({_id:id});
        } catch(e) {
            return null;
        }
    },
    createUser : async ({username, password}) => {
        try {
            let user = new User({username,password});
            user = await user.save();
            console.log(user);
            if(user){
                return user;
            }   
            return null;
        } catch(e) {
            return null
        }
    },
    loginUser: async ({username, password}) => {
        try {
            const user = await User.findOne({username});
            if(user && user.password === password){
                return user;
            }
            return null
        } catch(e) {
            return null
        }
    },
}