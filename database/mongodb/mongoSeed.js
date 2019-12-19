/* eslint-disable no-console */
const { MongoClient } = require('mongodb');
const assert = require('assert');
const faker = require('faker');

const start = Date.now();
MongoClient.connect('mongodb://127.0.0.1', (err, client) => {
  if (err) {
    throw (err);
  }
  assert.equal(null, err);
  console.log('Connected successfully to server');
  const db = client.db('reviews');
  const collection = db.collection('business');
  // eslint-disable-next-line func-names
  const createBusiness = function () {
    const businesses = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 100000; i++) {
      businesses.push({
        business_name: faker.company.companyName(),
        claimed: Math.floor(Math.random() * 2),
        category: faker.lorem.word(),
        business_date: new Date(),
        description: faker.lorem.paragraph(),
      });
    }
    console.log('business array completed');
    return businesses;
  };
  collection.insertMany(createBusiness())
    .then(() => {
      console.log(`Query took ${Date.now() - start}ms`);
    })
    .catch((error) => {
      console.log(error);
    });
});
