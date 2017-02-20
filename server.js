var express  = require('express') ;
var app = express() ;

app.use(express.static(__dirname )); 

app.get('*', function(req, res) {
    res.sendfile('./index2.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(8086);    