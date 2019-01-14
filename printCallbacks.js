function getHTML (options, callback) {

  /* Add your code here */
  var https = require('https');

  https.get(options, function(response){
    response.setEncoding('utf-8');

    response.on('data', callback);

    response.on('end', function(){
      console.log('Response stream complete.');
    });
  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);