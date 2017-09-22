/*Create an express server that serves an HTML file that contains the title "Review Exercises 
from Week", an inspiring image
that reflects how you feel about class, 
and an ordered list of all the exercises.*/

var express = require('express');
var port = 5000;
var app = express();
var path = require('path');
app.listen(port,function(){
  console.log("Listening on " + port);
})

app.get('/practice', function(req, res){
  res.sendfile('./templates/erinEmily.html')
})