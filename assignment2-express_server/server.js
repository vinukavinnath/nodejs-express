const http = require('http');
const express = require('express');

const app = express();

// express's use function is used to travel through a series of middlewares
// next() must be called to traverse through defined middlewares

app.use('/users',(req, res) => {
    console.log("In the user middleware");
    res.send('<h2>In ther Users section</h2>');
});

app.use('/',(req, res) => {
    console.log("In the common middleware");
    res.send('<h1>Landing Page</h1>');
});


app.listen(3000);