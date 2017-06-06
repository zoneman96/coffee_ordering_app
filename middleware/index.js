var User = require("../models/user")

var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    //Save original Url
    console.log(req.url);
    req.session.oldUrl = req.originalUrl;
    req.flash("error", "Please Login First.")
    res.redirect("/login");
}

middlewareObj.notLoggedIn = function(req, res, next){
    if(!req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Already logged-in")
    res.redirect("/");
}

module.exports = middlewareObj;