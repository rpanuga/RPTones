var url = require('url');
var fs = require ('fs');

//How to render HTML file
function renderHTML(path, response) {
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

module.exports = {
    handleRequest: function(request, response) {
        response.writeHead(200, {'Content-Type': 'text/html'})
        
        var path = url.parse(request.url).pathname;
        switch (path) {
            case '/':
                renderHTML('./index.html', response);
                break;
            //Page condition (IF ACCESSED)
            case '/login':
                renderHTML('./login.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('Route not defined');
                response.end();
        }
    }

}