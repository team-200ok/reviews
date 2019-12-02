/* eslint-disable import/newline-after-import */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => res.send('Hello from server!'));

app.listen(port, () => console.log('Serving up reviews on port', port));
