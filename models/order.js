var mongoose = require("mongoose");

var Item = require("../models/item");
var User = require("../models/user");

//Mongoose Model Config
var orderSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    email: {type: String, required: true},
    cart: {type: Object, required: true},
    address: {type: String, required: true},
    name: {type: String, required: true},
    paymentId: {type: String, required: true},
    orderPrice: {type: Number},
    time: {type: String, default: moment().format("LLLL"), required: true},
    isCompleted: {type: Boolean, default: false, required: true},
    pickupTime: {type: String, default: moment(Date.now()).add(10, "m").format("LT"), required: true}
})

module.exports = mongoose.model("Order", orderSchema);