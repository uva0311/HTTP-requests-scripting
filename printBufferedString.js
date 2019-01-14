function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  var https = require('https');
  var dataArr = [];

  https.get(requestOptions, function(response){
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

getAndPrintHTML();