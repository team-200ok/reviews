/* eslint-disable func-names */
/* eslint-disable no-console */
const { MongoClient } = require('mongodb');
const assert = require('assert');
const {
  createBusiness,
  createUsers,
  createReviews,
  createComments,
  createImages,
} = require('./mongoSchema');


MongoClient.connect('mongodb://127.0.0.1', (err, client) => {
  if (err) {
    throw (err);
  }
  assert.equal(null, err);
  console.log('Connected successfully to server');
  const db = client.db('reviews');
  const seedData = function (createFunction, name) {
    const collection = db.collection(name);
    const start = Date.now();
    collection.insertMany(createFunction())
      .then(() => {
        console.log(`${name} seeding took ${Date.now() - start}ms`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const seedAll = function () { }
  seedData(createFunction)
});
