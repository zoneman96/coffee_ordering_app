var User = require("../models/user");

User.find(updateOne({email: "admin@admin.com"}, {$set: {"isAdmin": "true"}}))