var express = require('express')
var fs = require('fs')
var bodyparser = require('body-parser')
var stylus = require('stylus');
var app = express()


app.get('/books', function(req, res){
  var filename = process.argv[3];
fs.readFile(filename, function (err, data) {
  if (err){
    return
  }try{
    books = JSON.parse(data);
  }catch(err){
    return
  }
  res.json(books)
})

})

// app.get('/search', function(req, res){
//   var query = req.query
//   res.send(query)
// })


// app.put('/message/:id', function(req, res){
//   var id = req.params.id
//   var string = require('crypto')
//     .createHash('sha1')
//     .update(new Date().toDateString() + id)
//     .digest('hex')
//   res.send(string);
//
// })



// app.use(stylus.middleware(process.argv[3]));
// app.use(express.static(process.argv[3]));
// app.use(bodyparser.urlencoded({extended: false}))

// app.post('/form', function(req, res){
//   res.send( req.body.str.split('').reverse().join(''));
// })


// app.set('view engine', 'pug')
// app.set('views', process.argv[3])
//
// app.get('/home', function(req, res){
//   res.render('index', {date: new Date().toDateString()})
// })
app.listen(process.argv[2])
