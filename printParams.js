function getAndPrintHTML (options) {

  /* Add your code here */
  var https = require('https');
  var dataArr = [];

  https.get(options, function(response){
    response.setEncoding('utf-8');

    response.on('data', function(data){
      dataArr.push(data);
      console.log('Data Received. ', `${dataArr}`);
    });

    response.on('end', function(){
      console.log('Response stream complete.');
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
