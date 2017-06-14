# Coffee Ordering Application

A mobile ready, full scale E-commerce application for ordering coffee and other beverages for pickup at a spacific time. Pick up time is set using moment.js. [please note the time zone is set to Central Time, and open times are set for 7AM - 4:30. Outside of that time frame, you will not be able to access the checkout page.] Orders are handled in the Admin panel, and include all of the needed information to complete the order.

## Tech Stack

-  **Frontend**: EJS Templeting
-  **Backend**: Node.js, ExpressJS, Mongoose
-  **Database**: MongoDB
-  **Payments**: Stripe API
-  **Authentication**: Passport.js

## Deployment
-  Application is live at:
    -  [https://shielded-anchorage-97469.herokuapp.com]
-  The application is deployed on **Heroku** using source code pulled directly from GitHub.
-  The database is deployed on **mlab.com** cloud. 

### Usage

Feel free to create your own acconts, and make your own orders. Dont worry, Strype is in test mode so no money will be taken from your credit card account. You can also use the dummy card number provided by Stripe for purchases: *4242424242424242*. Once completeing an order, you order history will be shown in your User Profile page.

Administrator login:
Email: admin@admin.com
Password: password

Once logging in as the admin you can:
 ##1) Access to the pending orders where see all of the items and onformation to fullfil the order, and mark it as complete.
 ##2) Access the completed orders and sort them via various criteria. 
 ##3) Access a list of all of the users, and see their previous orders. 
 ##4) View a list of all items and mark them as unavailable if out of stock.

### Desktop ScreenShots

<img src="https://raw.githubusercontent.com/thangbn/order-management/master/screenshot/add_Order-M.png" width="600">

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
