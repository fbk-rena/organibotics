const express = require("express");
const app = express();

var path = require("path");
app.use('/static', express.static(path.join(__dirname,'node_modules')));
app.use('/static', express.static(path.join(__dirname,'public')));

app.use('/',express.static("public"));
app.listen(3000);
console.log("listenning 3000");