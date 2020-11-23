var express = require( 'express' );
var bodyParser = require("body-parser");
var http = require( 'http');
var app = express();
var server = http.createServer( app );

app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb', extended: true, parameterLimit:50000}));

// Resume Download Service
var htmlPdf = require('html-pdf-chrome');
const options = {
	port: 9222, // port Chrome is listening on
};

app.post('/generatepdf', function (req, res) {
	var html = req.body.html;
	htmlPdf.create(html, options).then((pdf) => res.send(pdf.toBuffer()));
});

server.listen(8080, function () {
	console.log("Node Started !!");
});
