const {User} = require('../models/user');



module.exports = {
    getUserById: async (id)=> {
        try {
            const user = await User.find({_id:id});
        } catch(e) {
            return null
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
            const user = await User.find({username});
            if(user && user.password){
                return user;
            }
            return null
        } catch(e) {
            return null
        }
    },
}