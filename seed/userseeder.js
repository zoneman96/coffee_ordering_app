var User = require("../models/user");

User.updateOne({email: "admin@admin.com"}, {$set: {"isAdmin": "true"}})