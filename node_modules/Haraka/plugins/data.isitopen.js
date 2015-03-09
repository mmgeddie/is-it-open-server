// Simple string signatures

exports.hook_data = function (next, connection) {
    // enable mail body parsing
    connection.transaction.parse_body = 1;
    next();
}

exports.hook_data_post = function (next, connection) {  
	this.loginfo('Body: ' + connection.transaction.body);  
    return next();
}