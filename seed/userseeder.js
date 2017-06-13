var User = require("../models/user");

function seedDB() {
    //remove all Items
    User.updateOne({email: "admin@admin.com"}, {$set: {"isAdmin": "true"}})
}

module.exports = seedDB;