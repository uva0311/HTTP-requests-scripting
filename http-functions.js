module.exports = function getHTML (options, callback) {
    /* Your code here */
    var https = require('https');

    https.get(options, function(response){
    response.setEncoding('utf-8');

    response.on('data', callback);
  });
};