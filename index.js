var express = require("express");
var app = express();
var port = 8000;
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(express.static(__dirname));

app.get('/', (req, res) => {        
    res.sendFile('homepage/homepage.html', {root: __dirname});      
                                                         
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
  });
  