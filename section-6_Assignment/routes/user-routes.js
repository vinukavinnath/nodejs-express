const express = require('express');
const router = express.Router();
const users = [];

router.get('/', (req, res) => {
    res.render('home', { pageTitle: "Welcome to UserDash!" ,users:users});
});

router.get('/add-user', (req, res) => {
    res.render('add-user', { pageTitle: "Add a user" });
});

router.post('/users', (req, res) => {
    res.redirect('/');
    users.push({ userName: req.body.user });
    // console.log({ ...req.body });
    console.log(users);

});

module.exports = { routes: router, users: users };