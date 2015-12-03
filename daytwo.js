var http = require('http');
var url = require('url');
var fs = require('fs');

function homePage(request, response) {
	// user want to see home
	response.writeHead(200, {
		'content-type':'text/html'
	});
	response.end('<h1>Home Page</h1>');
}

function aboutPage(request, response) {
	// user wants to see about page
	response.writeHead(200, {
		'content-type':'text/html'
	});
	response.end('<h1>About Page</h1>');
}

function createPage(request, response, page) {
	// user wants to see about page
	response.writeHead(200, {
		'content-type':'text/html'
	});
	response.end('<h1>' + page + ' Page</h1>');
}

var server = http.createServer(function(request, response) {
	var pathName = url.parse(request.url)
	switch(pathName.pathname) {
		case '/':
			createPage(request, response, 'Home');
			break;
		case '/about':
			createPage(request, response, 'About');
			break;
		default:
			response.end('<h1>We dont\'t know where you are!</h1><button>I\'m a button</button>');
			break;
	}
});
server.listen(3039);
console.log("The server islistening on port 3039");
