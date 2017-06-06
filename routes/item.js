var express = require("express");
var router = express.Router({mergeParams:true});
var Item = require("../models/item");
var User = require("../models/user");
var middleware = require("../middleware");



//Item Index
router.get("/", function(req, res) {
    Item.find({}, function(err, item){
        if(err) {
            console.log(err);
        } else {
            res.render("item/shop", {products:item})
        }
    })

})

//New
router.get("/new", function(req, res){
    //Show form
    res.render("item/new");
})

//Show
router.get("/:id", function(req, res){
    Item.findById(req.params.id, function(err, item){
        if(err){
            console.log(err)
        } else {
            res.render("item/show", {product:item})
        }
    })
})

//Coffee or Tea?

module.exports = router;