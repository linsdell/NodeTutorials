
var mymodule = require('./mymodule.js');
var pathName = process.argv[2];
var extension = process.argv[3];
// fs.readdir(pathName,function callback(err, list){
//   for(var i = 0; i<list.length;i++){
//     if(path.extname(list[i])==extension)
//     console.log(list[i]);
//   }
// })

mymodule(pathName, extension, function callback(err, list){
  if(err){
    return
  }
  for(var i = 0; i<list.length;i++){
    console.log(list[i]);
  }
})
