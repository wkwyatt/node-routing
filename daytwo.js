var http = require('http');
var url = require('url');
var fs = require('fs');

var homeHtml = fs.readFileSync('home.html');
var aboutHtml = fs.readFileSync('about.html');
var contactHtml = fs.readFileSync('contact.html');
var errorHtml = fs.readFileSync('error.html');

function homePage(request, response) {
	// user want to see home
	response.writeHead(200, {
		'content-type':'text/html'
	});
	response.end(homeHtml);
}

function aboutPage(request, response) {
	// user wants to see about page
	response.writeHead(200, {
		'content-type':'text/html'
	});
	response.end(aboutHtml);
}

function createPage(request, response, page) {
	// user wants to see about page
	response.writeHead(200, {
		'content-type':'text/html'
	});
	response.end(page);
}

var server = http.createServer(function(request, response) {
	var pathName = url.parse(request.url)
	switch(pathName.pathname) {
		case '/':
			createPage(request, response, homeHtml);
			break;
		case '/about':
			createPage(request, response, aboutHtml);
			break;
		case '/contact':
			createPage(request, response, contactHtml);
		default:
			response.end(errorHtml);
			break;
	}
});
server.listen(3039);
console.log("The server islistening on port 3039");
