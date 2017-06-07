var User = require("../models/user")

var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    //Save original Url
    req.session.oldUrl = req.originalUrl;
    req.flash("error", "Please Login First.");
    res.redirect("/login");
}

middlewareObj.hasPickupTime = function(req, res, next){
    if(req.session.pickupTime) {
        return next();
    }
    //Save original Url
    req.session.oldUrl = req.originalUrl;
    req.flash("error", "Please select pickup time.");
    res.redirect("/cart/pickup");
}

middlewareObj.isOpen = function(req, res, next){
    var now = moment().format("HHmm");
    if(now <= 900 || now >= 1700){
        req.session.pickupTime = null;
        req.flash("error", "Sorry, we are closed.");
        return res.redirect("/cart");
    }
    next()
}

middlewareObj.notLoggedIn = function(req, res, next){
    if(!req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Already logged-in")
    res.redirect("/");
}

middlewareObj.isAdmin = function(req, res, next){
    if(req.user && req.user.isAdmin === true){
        return next()
    }
    req.flash("error", "You do not have access to this area.");
    res.redirect("/profile");
}

module.exports = middlewareObj;