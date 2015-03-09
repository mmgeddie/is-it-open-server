// discard

exports.register = function () {
    this.register_hook('queue','discard');
    this.register_hook('queue_outbound', 'discard');
}

exports.discard = function (next, connection) {
    connection.loginfo(this, 'discarding message');
    // Pretend we delivered the message
    return next(OK);
}
