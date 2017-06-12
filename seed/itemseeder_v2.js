var Item = require("../models/item");

var data = [
    {
        name: "Cafe Latte",
        description: "Creamy",
        image: "https://s3-us-west-2.amazonaws.com/beachbody-blog/uploads/2017/04/Beachbody-Blog-Pumpkin-Spice-Latte.jpg",
        size: {
            small: {
                price: 3.25,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 3.95,
                ounces: 16,
                name: "medium"
            }
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "American Cappuccino",
        image: "https://www.nespresso.com/ncp/res/uploads/recipes/377c71f2069b1dba47f10aeb701d576d889101ee.jpg",
        size: {
            small: {
                price: 3.40,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 3.85,
                ounces: 16,
                name: "medium"
            },
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "Italian Cappuccino (7oz)",
        image: "https://www.nespresso.com/ncp/res/uploads/recipes/377c71f2069b1dba47f10aeb701d576d889101ee.jpg",
        size: {
            small: {
                price: 3.25,
                ounces: 7,
                name: "small"
            },
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "Americano",
        image: "http://www.nvtc.ee/e-oppe/Marina/toit_jook/Americano.jpg",
        size: {
            small: {
                price: 2.75,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 3.25,
                ounces: 16,
                name: "medium"
            },
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "Almond Joy",
        size: {
            small: {
                price: 3.70,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 4.30,
                ounces: 16,
                name: "medium"
            },
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "Milky Way Latte",
        size: {
            small: {
                price: 3.70,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 4.30,
                ounces: 16,
                name: "medium"
            },
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "Snickers Latte",
        size: {
            small: {
                price: 3.90,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 4.50,
                ounces: 16,
                name: "medium"
            },
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "Iced Latte",
        image: "https://akadesign.ca/wp-content/uploads/2014/09/NO-SUGAR-ICED-COFFEE-LATTE.jpg",
        size: {
            small: {
                price: 3.25,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 3.75,
                ounces: 16,
                name: "medium"
            },
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "Iced Flavored Latte",
        image: "https://akadesign.ca/wp-content/uploads/2014/09/NO-SUGAR-ICED-COFFEE-LATTE.jpg",
        size: {
            small: {
                price: 3.50,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 4.40,
                ounces: 16,
                name: "medium"
            },
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "Mocha",
        image: "https://www.riverrockvapes.com/wp-content/uploads/2016/10/Mocha.jpg",
        size: {
            small: {
                price: 3.50,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 4.10,
                ounces: 16,
                name: "medium"
            },
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "Breve",
        image: "http://getacoffeemaker.com/wp-content/uploads/2016/10/MG_2467-1574x706-800x400.jpg",
        size: {
            small: {
                price: 3.25,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 3.75,
                ounces: 16,
                name: "medium"
            },
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "Red Eye",
        image: "http://workpulse.io/blog/wp-content/uploads/2015/05/red-eye.jpg",
        size: {
            small: {
                price: 3.50,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 4.10,
                ounces: 16,
                name: "medium"
            },
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "Espresso Shot",
        image: "https://c1.staticflickr.com/8/7071/7176367881_57bb1b5d7e_b.jpg",
        size: {
            small: {
                price: 1.25,
                ounces: 1,
                name: "small"
            },
            medium: {
                price: 2.00,
                ounces: 2,
                name: "medium"
            },
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "Espresso Con Panna",
        image: "http://ot-foodspotting-production.s3.amazonaws.com/reviews/755365/thumb_275.jpg?1312812868",
        size: {
            small: {
                price: 1.50,
                ounces: 1,
                name: "small"
            },
            medium: {
                price: 2.25,
                ounces: 2,
                name: "medium"
            },
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "Drip coffee",
        image: "https://cdn-starbucks.netdna-ssl.com/uploads/images/_framed/UswsqYHL-5411-7215.JPG",
        size: {
            small: {
                price: 1.80,
                ounces: 1,
                name: "small"
            },
            medium: {
                price: 2.25,
                ounces: 2,
                name: "medium"
            },
        },
        isCoffee: true,
        isAvailable: true
    },
    {
        name: "Pour Over",
        image: "https://daks2k3a4ib2z.cloudfront.net/5598e0f94aea7b7363a3d8b8/569fb3ec7270fb0e58ca564b_pourover%20cones.jpg",
        size: {
            small: {
                price: 2.30,
                ounces: 1,
                name: "small"
            },
            medium: {
                price: 2.80,
                ounces: 2,
                name: "medium"
            },
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
                price: 2.85,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 3.45,
                ounces: 16,
                name: "medium"
            },
            large: {
                price: 5.50,
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
                price: 2.85,
                ounces: 12,
                name: "small"
            },
            medium: {
                price: 3.45,
                ounces: 16,
                name: "medium"
            },
            large: {
                price: 5.50,
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