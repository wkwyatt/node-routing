console.log('This is node routing test');

var http = require('http');
var url = require('url');

function renderNewPage(request, response) {
	response.writeHead(200, {
		'content-type': 'text/html'
	});
	response.write('You shouldnt see me');
	response.end();
}

function render404(request, response) {
	response.writeHead(404);
	response.end('404, Page Not Found!!!');
}

var server = http.createServer(function(request, response) {
	var newUrl = '/page/new';
	// renderNewPage(request, response);
	// console.log(newUrl);
	var pathName = url.parse(request.url);
	// console.log(request.url);
	console.log(pathName);
	if (newUrl == pathName.pathname) {
		renderNewPage(request, response);
	} else {
		render404(request, response);
	}
});

server.listen(8080);
console.log('server is listening on port 8080');
// console.log('test nodemon');