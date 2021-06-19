const mongoose = require('mongoose');

const USER_DOCUMENT = 'User';

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,
    },
    password: {
        type: String,
        required:true,
    },
}, {timestamps:true});

const User = mongoose.model(USER_DOCUMENT, userSchema);


User.on('create', async (user) => {
    const { password } = user;
    user.password = "hashed_password_" + password;
    return user;
})





module.exports = {
    User,
    USER_DOCUMENT,
}