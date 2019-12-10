/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller.js');
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/:id', express.static('public'));

app.get('/api/review/:businessId', (req, res) => {
  controller.getReviewsAndPhotos(req.params.businessId)
    .then((data) => res.send(data))
    .catch((err) => console.error(err));
});

app.get('/api/business/:businessId', (req, res) => {
  console.log(req.params.businessId);
  controller.getBusiness(req.params.businessId)
    .then((data) => controller.getReviewsAndPhotos(data.dataValues.business_id))
    .then((data) => res.send(data))
    .catch((err) => console.error(err));
});

app.put('/api/vote/:reviewId/:vote', (req, res) => {
  controller.putVote(req.params.reviewId, req.params.vote)
    .then((data) => res.send(data))
    .catch((err) => console.error(err));
});

app.post('/api/review', (req, res) => {
  // request should include the fields needed to create a new record in the database
  console.log(req.body); // req.body is empty right now and failing tests
  controller.postReview(req.body)
    .then((msg) => res.status(201).send(msg))
    .catch((err) => console.error(err));
});

app.post('/api/photo', (req, res) => {
  controller.postPhoto(req.body)
    .then((msg) => res.status(201).send(msg))
    .catch((err) => console.error(err));
});

module.exports = app;
