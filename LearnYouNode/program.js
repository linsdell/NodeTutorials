var http = require('http');
var bl = require('bl');
var output = [];
var count = 0;


for(var i = 0; i<3; i++){
  getData(i);
}

function getData(i){
var url = process.argv[2+i];
http.get(url, function(response){
  response.pipe(bl(function (err, data){
    if(err){
      return console.error(err);
    }
    output[i] = data.toString();
    data = data.toString();
    count++;

    if (count == 3){
      printOutput();
    }
  }))
})
}

function printOutput(){
  for(var i = 0; i<3;i++){
    console.log(output[i]);
  }
}
