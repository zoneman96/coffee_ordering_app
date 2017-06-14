# Coffee Ordering Application

A mobile ready, full-scale E-commerce application for ordering coffee and other beverages for pickup at a specific time. Pick up time is set using moment.js. [please note the time zone is set to Central Time, and open times are set for 7 AM - 4:30 PM. Outside of that time frame, you will not be able to access the checkout page.] Orders are handled in the Admin panel and include all of the needed information to complete the order.

## Tech Stack

-  **Frontend**: EJS Templeting
-  **Backend**: Node.js, ExpressJS, Mongoose
-  **Database**: MongoDB
-  **Payments**: Stripe API
-  **Authentication**: Passport.js

## Deployment
-  The application is live at:
    -  [https://shielded-anchorage-97469.herokuapp.com]
-  The application is deployed on **Heroku** using source code pulled directly from GitHub.
-  The database is deployed on **mlab.com** cloud. 

### Usage

Feel free to create your own account, and make some coffee orders. Dont worry, Stripe is in test mode so no money will be taken from your credit card account. :) If you would like, can also use the dummy card number provided by Stripe for purchases: *4242424242424242*. Once completeing an order, you order history will be shown on your User Profile page.

##### Administrator login:
-  Email: admin@admin.com
-  Password: password

Once logging in as the admin you can:
1. Access to the pending orders where see all of the items and information fulfill the order and mark it as complete.
2. Access the completed orders and sort them via various criteria. 
3. Access a list of all of the users, and see their previous orders. 
4. View a list of all items and mark them as unavailable if out of stock.

### Desktop Screenshots

-  Index
<img src="https://github.com/zoneman96/coffee_ordering_app/blob/master/screenshots/Desktop_Index.png" width="600">

-  Register
<img src="https://github.com/zoneman96/coffee_ordering_app/blob/master/screenshots/Desktop_Register.png" width="600">

-  Cart
<img src="https://github.com/zoneman96/coffee_ordering_app/blob/master/screenshots/Desktop_cart.png" width="600">

-  Checkout
<img src="https://github.com/zoneman96/coffee_ordering_app/blob/master/screenshots/Desktop_Checkout.png" width="600">

-  Profile
<img src="https://github.com/zoneman96/coffee_ordering_app/blob/master/screenshots/Desktop_Profile.png" width="600">

### Mobile Screenshots

-  Show Item & Login
<img src="https://github.com/zoneman96/coffee_ordering_app/blob/master/screenshots/Mobile_ShowItem.png" width="400"><img src="https://github.com/zoneman96/coffee_ordering_app/blob/master/screenshots/Mobile_Login.png" width="600">

-  Cart
<img src="https://github.com/zoneman96/coffee_ordering_app/blob/master/screenshots/Mobile_Cart.png" width="600">

-  Select Pickup Time
<img src="https://github.com/zoneman96/coffee_ordering_app/blob/master/screenshots/Mobile_SelectPickupTime.png" width="600">

-  Profile
<img src="https://github.com/zoneman96/coffee_ordering_app/blob/master/screenshots/Mobile_Profile.png" width="600">

### Admin Screenshots

-  Pending Orders List
<img src="https://github.com/zoneman96/coffee_ordering_app/blob/master/screenshots/Desktop_PendingOrders.png" width="600">

-  Show Pending Order
<img src="https://github.com/zoneman96/coffee_ordering_app/blob/master/screenshots/Desktop_ShowPendingOrder.png" width="600">

-  Completed Orders List
<img src="https://github.com/zoneman96/coffee_ordering_app/blob/master/screenshots/Desktop_CompletedOrders.png" width="600">

-  Item List
<img src="https://github.com/zoneman96/coffee_ordering_app/blob/master/screenshots/Desktop_ItemList.png" width="600">

-  User List
<img src="https://github.com/zoneman96/coffee_ordering_app/blob/master/screenshots/Desktop_UserList.png" width="600">

-  Show Selected User's Orders
<img src="https://github.com/zoneman96/coffee_ordering_app/blob/master/screenshots/Desktop_ShowUserOrders.png" width="600">
