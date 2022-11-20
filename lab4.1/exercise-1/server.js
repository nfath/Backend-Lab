const express = require('express');
let app = express();

app.get('/html', function(req, res) {
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/json', function(req, res) {
    res.send({firstname: 'Nader', lastname: 'Fathzadeh'});
});

app.get("/toronto*", (req, res) => res.send("<html><head></head><body><h1>Go Toronto!</h1></body></html>"));

// app.get("/toronto*team", function(req, res) {
//     res.send("<html><head></head><body><h1>Go Toronto!</h1></body></html>");
// });

app.listen(3000);
