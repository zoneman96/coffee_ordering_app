var Item = require("../models/item");

var data = [
    {
        name: "Latte",
        description: "Creamy",
        image: "https://s3-us-west-2.amazonaws.com/beachbody-blog/uploads/2017/04/Beachbody-Blog-Pumpkin-Spice-Latte.jpg",
        size: {
            small: {
                price: 2.99,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 3.49,
                ounces: 16,
                name: "medium"
            },
            large: {
                price: 3.99,
                ounces: 20,
                name: "large"
            }
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "Cappuccino",
        description: "Foamy",
        image: "https://www.nespresso.com/ncp/res/uploads/recipes/377c71f2069b1dba47f10aeb701d576d889101ee.jpg",
        size: {
            small: {
                price: 2.99,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 3.49,
                ounces: 16,
                name: "medium"
            },
            large: {
                price: 3.99,
                ounces: 20,
                name: "large"
            }
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "Americano",
        description: "Americany",
        image: "http://www.nvtc.ee/e-oppe/Marina/toit_jook/Americano.jpg",
        size: {
            small: {
                price: 2.99,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 3.49,
                ounces: 16,
                name: "medium"
            },
            large: {
                price: 3.99,
                ounces: 20,
                name: "large"
            }
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "Black Tea",
        description: "Dark as the night",
        image: "http://farmmountain.com/wp-content/uploads/2015/07/LeafyPHcup2.jpg",
        size: {
            small: {
                price: 2.99,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 3.49,
                ounces: 16,
                name: "medium"
            },
            large: {
                price: 3.99,
                ounces: 20,
                name: "large"
            }
        },
        isCoffee: false,
        isAvailable: true
    },
    {
        name: "Nitro - Obsidian",
        description: "String and bright",
        image: "http://s4.insidehook.com/header_nitro_1461946608.jpg",
        size: {
            small: {
                price: 2.99,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 3.49,
                ounces: 16,
                name: "medium"
            },
            large: {
                price: 3.99,
                ounces: 20,
                name: "large"
            }
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "Nitro - Colombian",
        description: "Mellow and sweet",
        image: "http://s4.insidehook.com/header_nitro_1461946608.jpg",
        size: {
            small: {
                price: 2.99,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 3.49,
                ounces: 16,
                name: "medium"
            },
            large: {
                price: 3.99,
                ounces: 20,
                name: "large"
            }
        },
        isCoffee: true,
        isAvailable: false
    }
]

function seedDB() {
    //remove all Items
    Item.remove({}, function(err){
        console.log("Removed Products")
        data.forEach(function(seed){
            Item.create(seed, function(err, item){
                if(err){
                    console.log(err)
                } else {
                    console.log("Added now item")
                }
            })
        })
    })
}

module.exports = seedDB;