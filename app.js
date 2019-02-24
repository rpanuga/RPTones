var http = require('http'); //Core module in NodeJS, does not require path
var module1 = require('./module1');
var module2 = require('./module2');


// Creates the Server and calls several functions for a basic request
http.createServer(function (request, response)
{
  response.writeHead(200, {'Content-Type': 'text/plain'}); //Explain the request details
  response.write(module2.myVariable);
  module2.myFunction();
  response.end(); //End the request   
}).listen(8000); //Create listening port at ####

