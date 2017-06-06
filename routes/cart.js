var express = require("express");
var router = express.Router({mergeParams:true});
var csrf = require("csurf");

//User Middleware
var Item = require("../models/item");
var User = require("../models/user");
var middleware = require("../middleware");
var Cart = require("../models/cart");

var csrfProtection = csrf()
router.use(csrfProtection);

//Reduce Item by 1
router.get("/reduce/:itemid", function(req, res, next){
    var productId = req.params.itemid;
    var cart = new Cart(req.session.cart ? req.session.cart : {})

    cart.reduceByOne(productId)
    req.session.cart = cart;
    res.redirect("/cart");
})

//Increment Item by 1
router.get("/increment/:itemid", function(req, res, next){
    var productId = req.params.itemid;
    var cart = new Cart(req.session.cart ? req.session.cart : {})

    cart.incrementByOne(productId)
    req.session.cart = cart;
    res.redirect("/cart");
})

//Remove From Cart
router.get("/remove/:itemid", function(req, res, next){
    var productId = req.params.itemid;
    var cart = new Cart(req.session.cart ? req.session.cart : {})
    // console.log("product id " + productId)
    cart.remove(productId)
    req.session.cart = cart;
    res.redirect("/cart");
})

//Add to cart
router.get("/:itemid/:itemsize", function(req, res){
    var productId = req.params.itemid;
    var productSize = req.params.itemsize;
    var cart = new Cart(req.session.cart ? req.session.cart : {})

    Item.findById(productId, function(err, product){
        if(err){
            return res.redirect("/");
        }
        cart.add(product, product.id, productSize);
        req.session.cart = cart;
        res.redirect("/items");
    })
})

// Show Cart
router.get("/", function(req, res){
    if(!req.session.cart){
        return res.render("cart/index", {products:null})
    }
    var cart = new Cart(req.session.cart);
    res.render("cart/index", {products: cart.generateArray(), totalPrice: cart.totalPrice})
})

module.exports = router;