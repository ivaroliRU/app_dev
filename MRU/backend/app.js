// api of the application
const api = require('./src/api');

//port the application is running on
const PORT = process.env.PORT || 3000;

//socket io connection for tcp connections
var io = require('socket.io')(serv,{});

//server for both raw tcp connections and http
var serv = require('http').Server(api);

serv.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT + "/");
});