var mongoose                = require("mongoose"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    bcrypt                  = require("bcrypt-nodejs");


//Mongoose Model Config
var userSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false}
})

userSchema.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};
userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userSchema);