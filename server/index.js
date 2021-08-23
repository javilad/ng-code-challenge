const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 8081;

app.use(cors());

app.get('/temperature/:id', (req, res) => {
  get(req, res);
});

function get(req, res) {
  this.URL_API = 'https://temperature-sensor-service.herokuapp.com/sensor';

  return fetch(`${this.URL_API}/${req.params.id}`)
    .then((response) => response.json())
    .then((response) => res.send(response));
}

app.listen(port, () => {
  console.log(`SensorTech server at http://localhost:${port}`);
});
