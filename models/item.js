var mongoose = require("mongoose");

//Mongoose Model Config
var itemSchema = mongoose.Schema({
    name: String,
    image: {type: String, default: "https://beanstalk-production-f.squarecdn.com/files/3779e05a5f65ff4b2b7a7da599a89046/original.jpeg"},
    description: String,
    size: {
            small: {
                price: Number,
                ounces: Number,
                name: String
            },
            medium: {
                price: Number,
                ounces: Number,
                name: String
            },
            large: {
                price: Number,
                ounces: Number,
                name: String
            }
        },
    isCoffee: Boolean,
    isAvailable: Boolean
})

module.exports = mongoose.model("Item", itemSchema);