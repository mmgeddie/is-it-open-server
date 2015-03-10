var path    = require('path');

process.env.HARAKA = path.join(path.resolve('.'), 'haraka');
var haraka  = require('./node_modules/Haraka/haraka.js');