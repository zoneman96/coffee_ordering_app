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
    console.log(now)
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

module.exports = middlewareObj;