const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client')));

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});