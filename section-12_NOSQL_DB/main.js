const express = require('express');
const parser = require('body-parser');
const path = require('path');
const pageNotFoundController = require('./controllers/not-found');
const { dbConn: databaseConnection } = require('./utils/database');
const User = require('./models/user');
const { v4: uuidv4 } = require('uuid');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const productRoutes = require('./routes/products');


app = express();
app.use(parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Adding ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Setting a middleware to send user details with each request
app.use((req, res, next) => {
    User.findUserByUsername("vinuka")
        .then(user => {
            if (!user) {
                const userId = uuidv4();
                const newUser = new User(userId, 'vinuka', 'vinuka@example.com');
                newUser.save()
                    .then(result => {
                        req.user = newUser;

                        if (result.acknowledged) {
                            console.log('--- NEW USER CREATED ---');
                        }

                        else
                            console.log('--- FAILED TO CREATE NEW USER ---');
                        next();
                    })
                    .catch(err => console.log(err))

            } else {
                req.user = user;
                console.log(`--- USER FOUND --- \n  USERNAME: ${user.username}`);
            }
            next();
        })
        .catch(err => console.log(err));
});

// Adding routes
app.use(shopRoutes);
app.use(productRoutes);
app.use(adminRoutes);


// Handling page not found
app.use(pageNotFoundController.pageNotFound);

databaseConnection(() => {
    app.listen('3000');
});