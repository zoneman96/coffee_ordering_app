var express = require("express");
var router = express.Router({mergeParams:true});
var csrf = require("csurf");

//User Middleware
var Item = require("../models/item");
var User = require("../models/user");
var middleware = require("../middleware");
var Cart = require("../models/cart");
var Order = require("../models/order");

//Apply to all routes (is admin)
router.use("/", middleware.isAdmin, function(req, res, next){
    next()
});

//Root Route
router.get("/", function(req, res, next){
    res.redirect("admin/orders/pending")
})

//Orders Root Route
router.get("/orders", function(req, res, next){
    res.redirect("admin/orders/pending")
})

//Show Pending Orders
router.get("/orders/pending", function(req, res, next){
    Order.find({isCompleted:"false"}, function(err, orders){
        if(err){
            req.flash("error", err);
            return res.redirect("/login")
        }
        var cart;
        orders.forEach(function(order){
            cart = new Cart(order.cart);
            order.items = cart.generateArray();
        })
        res.render("admin/pendingOrders", {orders: orders});
    })
})


//Show Completed Orders
router.get("/orders/completed", function(req, res, next){
    Order.find({isCompleted:"true"}, function(err, orders){
        if(err){
            req.flash("error", err);
            return res.redirect("/login")
        }
        var cart;
        orders.forEach(function(order){
            cart = new Cart(order.cart);
            order.items = cart.generateArray();
        })
        res.render("admin/completedOrders", {orders: orders});
    })
})

//Mark As Completed
router.get("/orders/:id", function(req, res, next){
    //Find order by Id
    Order.findById(req.params.id, (function(err, foundOrder){
        //Mark as completed
        foundOrder.isCompleted = true;
        //Save Order
        foundOrder.save()
    }))
    res.redirect("/admin/orders/pending");
})

//Show Order
router.get("/orders/show/:id", middleware.isLoggedIn, function(req, res, next){
    //find user orders
    Order.findById(req.params.id, function(err, order){
        if(err){
            req.flash("error", err);
            return res.redirect("/admin/orders/pending")
        }
        var cart;
        cart = new Cart(order.cart);
        order.items = cart.generateArray();
        console.log(order)
        res.render("admin/showOrder", {order: order});
    });
});

module.exports = router;