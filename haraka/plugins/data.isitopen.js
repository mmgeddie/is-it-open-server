var http = require('http');

exports.hook_data = function (next, connection) {
    // enable mail body parsing
    connection.transaction.parse_body = 1;
    next();
}

exports.hook_data_post = function (next, connection) {  
	this.loginfo('Body: ' + connection.transaction.body);  

	var establishment = {
	  	name: "Matt Geddie",
		// time: new Date ("3/10/2015, 3:52 AM."+" CDT")
		time: new Date()
	};

	var establishmentString = JSON.stringify(establishment);

	var headers = {
	  	'Content-Type': 'application/json',
	  	'Content-Length': establishmentString.length
	};

	var options = {
	  	host: 'is-it-open.herokuapp.com',
	  	port: 80,
	  	path: '/establishments',
	  	method: 'POST',
	  	headers: headers
	};

	var req = http.request(options);

	req.on('error', function(e) {
		connection.logerror(e);
	});

	req.write(establishmentString);
	req.end();

    return next();
}