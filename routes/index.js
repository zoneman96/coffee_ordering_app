var express = require("express")
var router = express.Router({mergeParams:true});
var passport = require("passport");
var csrf = require("csurf");

var Item = require("../models/item");
var User = require("../models/user");
var middleware = require("../middleware");
var Cart = require("../models/cart");
var Order = require("../models/order");

var csrfProtection = csrf()
router.use(csrfProtection);

//Logout Route
router.get("/logout", function(req, res, next){
    req.logout()
    req.flash("success", "You are now logged out.")
    res.redirect("/items")
})

//Profile
router.get("/profile", middleware.isLoggedIn, function(req, res, next){
    //find user orders
    Order.find({user: req.user}, function(err, orders){
        if(err){
            req.flash("error", err);
            return res.redirect("/login")
        }
        var cart;
        orders.forEach(function(order){
            cart = new Cart(order.cart);
            order.items = cart.generateArray();
        });
        res.render("profile", {orders: orders});
    });
});

//Show Register Page
router.get("/register", middleware.notLoggedIn, function(req, res, next){
    req.flash("error");
    res.render("register", {csrfToken: req.csrfToken()});
});

//Handle Register Logic
router.post("/register", middleware.notLoggedIn, passport.authenticate("local-signup", {
    successRedirect: "/",
    failureRedirect: "/register",
    failureFlash: true
}), function(req, res, next){
        if(req.session.oldUrl){
            //get and save old url
            var oldUrl = req.session.oldUrl;
            //remove ald url global variable
            req.session.oldUrl = null;
            //redirect to old url
            res.redirect(oldUrl);
        } else {
            res.redirect("/")
        }
});

//Login Show Form
router.get("/login", middleware.notLoggedIn, function(req, res, next){
    req.flash("error");
    res.render("login", {csrfToken: req.csrfToken()})
});

//Handle Login Logic
router.post("/login", middleware.notLoggedIn, passport.authenticate("local-signin",
    {
        successRedirect: "/items",
        failureRedirect: "/login",
        failureFlash: true
    }), function(req, res, next){
        if(req.session.oldUrl){
            //get and save old url
            var oldUrl = req.session.oldUrl;
            //remove ald url global variable
            req.session.oldUrl = null;
            //redirect to old url
            res.redirect(oldUrl);
        } else {
            res.redirect("/items")
        }
});

module.exports = router;