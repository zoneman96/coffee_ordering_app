var express = require("express")
var router = express.Router({mergeParams:true});
var csrf = require("csurf");
var stripe = require("stripe")(
  "sk_test_eEUL0m8sSoWWZ4iD1PtfgWmx"
);

//User Requires
var Item = require("../models/item");
var User = require("../models/user");
var middleware = require("../middleware");
var Cart = require("../models/cart");
var Order = require("../models/order");

var csrfProtection = csrf()
router.use(csrfProtection);


// Show checkout form
router.get("/", middleware.isLoggedIn, middleware.isOpen, middleware.hasPickupTime, function(req, res, next){
    if(!req.session.cart){
        req.flash("error", "No items in cart.")
        return res.redirect("/cart")
    }
    var cart = new Cart(req.session.cart);
    res.render("cart/checkout", {total: cart.totalPrice, csrfToken: req.csrfToken()});
})

//Make a charge
router.post("/", middleware.isLoggedIn, function(req, res, next){
    if(!req.session.cart){
        return res.redirect("cart/index", {products:null})
    }
    var cart = new Cart(req.session.cart);   
    stripe.charges.create({
        amount: cart.totalPrice * 100,
        currency: "usd",
        source: req.body.stripeToken, // obtained with Stripe.js
        description: "Test Charge"
        }, function(err, charge) {
        // asynchronously called
        if(err){
            req.flash("err", err.message)
            return res.redirect("/checkout")
        }
        var order = new Order({
            user: req.user,
            email: req.user.email,
            cart: cart,
            orderPrice: cart.totalPrice,
            address: req.body.address,
            name: req.body.name,
            paymentId: charge.id,
            pickupTime: req.session.pickupTime
        })
        order.save(function(err, result){
            if (err){
                req.flash("err", err.message)
                return res.redirect("/")
            }
            req.flash("success", "Order Complete!")
            req.session.cart = null;
            req.session.pickupTime = null;
            res.redirect("/profile");
        })
    });
})

module.exports = router;