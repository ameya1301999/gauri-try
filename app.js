var express = require('express');
var app = express();

const PORT = 8080;

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(PORT, function () {
  console.log('Example app listening on port: ' + PORT);
});


app.get('/gaurithegreat', (req, res) => {
    res.status(200);
    res.send("Welcome to gauri the great");
});

app.get('/ameyagavar', (req, res) => {
    res.status(200);
    res.send("Welcome to ameyaacchahai");
});