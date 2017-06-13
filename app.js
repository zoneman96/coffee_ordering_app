var express             = require("express"),
    app                 = express(),
    flash               = require("connect-flash"),
    bodyParser          = require("body-parser"),
    mongoose            = require("mongoose");
    passport            = require("passport"),
    LocalStategy        = require("passport-local"),
    methodOverride      = require("method-override"),
    Item                = require("./models/item"),
    User                = require("./models/user"),
    seedItemDB          = require("./seed/itemseeder"),
    seedUserDB          = require("./seed/userseeder"),
    validator           = require("express-validator"),
    cookieParser        = require("cookie-parser"),
    session             = require("express-session"),
    moment              = require('moment'),
    MongoStore          = require("connect-mongo")(session);

//Requiring Routes
var itemRoutes          = require("./routes/item");
var indexRoutes         = require("./routes/index")
var cartRoutes          = require("./routes/cart")
var checkoutRoutes      = require("./routes/checkout")
var adminRoutes         = require("./routes/admin")

//APP Config
mongoose.Promise = global.Promise;
//Local
// mongoose.connect("mongodb://localhost/impact_coffee_app");
//Mlab
mongoose.connect("mongodb://Caleb:(Zoneman69)@ds123722.mlab.com:23722/coffee_ordering_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(session({
    secret: "CoffeeSecret",
    resave: false, 
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    cookie: {maxAge: 180 * 60 * 1000}
}));
app.use(methodOverride("_method"));
app.use(validator());
app.set("view engine", "ejs");
app.use(flash());
app.use(express.static(__dirname + "/public"))

// Passport Config
require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

//Seed The Database
// seedItemDB();
seedUserDB();

// Sending to all pages
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    res.locals.login = req.isAuthenticated();
    res.locals.session = req.session;
    next();
})

// Root Route
app.get("/", function(rex, res) {
    res.redirect("/items")
})

// ROUTES
app.use("/items", itemRoutes);
app.use("/cart", cartRoutes);
app.use("/checkout", checkoutRoutes);
app.use("/", indexRoutes);
app.use("/admin", adminRoutes);


// Listen at port 3000
// app.listen(3000, function() {
//     console.log("Server listening");
// })

// On server
app.listen(process.env.PORT || 3000, function(req,res) {
    console.log("SERVER STARTED");
});