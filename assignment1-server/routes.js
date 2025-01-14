const { log } = require('console');
const fs = require('fs');


const routeHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    console.log('-----New Response-------');
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);

    if (url == '/') {

        // Sending response to client
        // Define headers
        res.setHeader('Content-Type', 'text/html');

        // Define content to send to browser
        res.write('<html>');
        res.write('<head><title>Type message</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input name="username" type="text"/><button type="Submit">Submit</button></form></body>');
        res.write('</html>');
        // Defines the end of message
        return res.end();
    }

    if (url == '/create-user' && method == 'POST') {

        const messageBody = [];

        req.on('data', (chunk) => {
            messageBody.push(chunk);
        });

        req.on('end', () => {
            const parsedMessage = Buffer.concat(messageBody).toString();
            console.log(parsedMessage);

            // Split second part
            let username = parsedMessage.split("=")[1];
            console.log(username);

            return res.end();

        });


        // fs.writeFileSync('text.txt', 'Hello');

        // Redirecting user to root
        // res.statusCode = 302;
        // res.setHeader('Location', '/');

    }

    if (url == '/users' && method == 'GET') {
        res.write('<html>');
        res.write('<head><title>Type message</title></head>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Vinuka</li><li>Thilina</li><li>Basuru</li>');
        res.write('<ul/>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }


    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<head><title>Response from NodeJs</title></head>');
    res.write('<body><h1>Hello from Node Server!</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = {
    handleRoutes: routeHandler
}