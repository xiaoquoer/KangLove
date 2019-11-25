var express = require("express");
var app = express();
// var path = require("path");
app.use(express.static('public'));
app.listen(8000,"0.0.0.0",function(){
	console.log('已经运行');
});