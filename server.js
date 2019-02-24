var http = require('http'); //Core module in NodeJS, does not require path
var fs = require('fs');


function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'}); //200 is success

    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404); //IF ERROR OCCURS IN READING WEBSITE
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end(); //Avoid missing the end statement
    });
}

//Create the server on given PORT ####
http.createServer(onRequest).listen(8000);