var mongoose = require("mongoose");

function moneyRound(dollars) {
    var cents = dollars * 100; // Convert dollars to cents
    var roundedCents = Math.round(cents); // Round those cents 
    var roundedPrice = roundedCents / 100; // turn them in to dollars again
    return roundedPrice;
}

module.exports =  function Cart(oldCart) {
    this.items = oldCart.items || {},
    this.totalQty = oldCart.totalQty || 0,
    this.totalPrice = oldCart.totalPrice || 0,

    //Add Item
    this.add = function (item, id, selectedSize) {
        // var selectedSize = "large";
        var storedItem = this.items[id + "_" + selectedSize];
        if(!storedItem) {
            //Create new Item if not found
            storedItem = this.items[id + "_" + selectedSize] = {
                item: item, 
                qty: 0, 
                price: 0,
                currentPrice: 0, 
                size: item.size[selectedSize], 
                findById: id + "_" + selectedSize
            }
        }

        //Update item information
        storedItem.qty++;
        storedItem.price = storedItem.size.price;
        storedItem.currentPrice = storedItem.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.size.price;
        this.totalPrice = moneyRound(this.totalPrice);
    }

    this.reduceByOne = function(id) {
        // console.log(this.items[id])
        this.items[id].qty--;
        this.items[id].currentPrice -= this.items[id].price;
        this.totalQty --;
        this.totalPrice -= this.items[id].price;
        this.totalPrice = moneyRound(this.totalPrice);
        if(this.items[id].qty <= 0) {
            delete this.items[id]
        }
    }

    this.incrementByOne = function(id) {
        this.items[id].qty++;
        this.items[id].currentPrice += this.items[id].price;
        this.totalQty ++;
        this.totalPrice += this.items[id].price;
        this.totalPrice = moneyRound(this.totalPrice);
    }

    this.generateArray = function() {
        var arr = [];
        for (var id in this.items) {
            // console.log(this[id])
            arr.push(this.items[id]);
        }
        return arr;
    }
    
    this.remove = function(id) {
        this.totalQty -= this.items[id].qty;
        this.totalPrice -= this.items[id].currentPrice;
        this.totalPrice = moneyRound(this.totalPrice);
        delete this.items[id]
    }
}