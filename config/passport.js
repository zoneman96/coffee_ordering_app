var passport        = require("passport"),
    User            = require("../models/user"),
    LocalStrategy    = require("passport-local").Strategy;

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

passport.use("local-signup", new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, function(req, email, password, done){
    req.checkBody("firstName", "Please enter first name. ").notEmpty();
    req.checkBody("lastName", "Please enter last name. ").notEmpty();
    req.checkBody("email", "Invalid Email. ").notEmpty().isEmail();
    req.checkBody("password", "Invalid Password. ").notEmpty().isLength({min: 6});
    var errors = req.validationErrors();
    if(errors){
        var messages = [];
        errors.forEach(function(err){
            messages.push(err.msg);
        });
        return done(null, false, req.flash("error", messages))
    }
    User.findOne({"email": email}, function(err, user){
        if(err){
            return done(err);
        }
        if(user){
            return done(null, false, {message: "Email is already in use."})
        }
        var newUser = new User();
        newUser.email = email,
        newUser.password = newUser.encryptPassword(password),
        newUser.firstName = req.body.firstName,
        newUser.lastName = req.body.lastName,
        newUser.save(function(err, result){
            if(err){
                return done(err);
            }
            return done(null, newUser);
        });

    });
}));

passport.use("local-signin", new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, function(req, email, password, done){
    User.findOne({"email": email}, function(err, user){
        if(err){
            return done(err);
        }
        if(!user){
            return done(null, false, {message: "No user found."})
        }
        if(!user.validPassword(password)) {
            return done(null, false, {message: "Wrong Password"})
        }
        return done(null, user);
    });
}))