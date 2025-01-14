const http = require('http');
const routes = require('./routes');

// server constant contains method for creating the server
const server = http.createServer(routes.handleRoutes);

// Call server method
server.listen(3000);