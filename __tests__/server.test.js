/* eslint-disable no-undef */
process.env.NODE_ENV = 'test';
const request = require('supertest');
const db = require('../database/index.js');
const app = require('../server/router.js');

beforeAll(async () => {
  await db.Review.sync();
  await db.Business.sync();
  await db.Photo.sync();
});

beforeEach(async () => {
  await db.Business.create({
    business_id: 'o3fu9nk0hspmvrcp13jw92',
    name: 'The Guest House',
  });
  await db.Photo.create({
    photo_id: 'thcrk7xwn1uw88jbx9wf6x',
    review_id: 'vhs6yrnjfb98of1u1on9me',
    caption: 'Stir-fried shredded chicken with peas and chopped ham',
    label: 'food',
    imageUrl: 'http://lorempixel.com/640/480/food',
  });
  await db.Review.create({
    review_id: 'vhs6yrnjfb98of1u1on9me',
    business_id: 'o3fu9nk0hspmvrcp13jw92',
    user: 'Vicky',
    stars: 5,
    date: '2019-10-24',
    text: 'Awesome restaurant, really great, 2 Michelin stars!',
    useful: 0,
    funny: 1,
    cool: 0,
  });
});

afterEach(async () => {
  await db.Business.destroy({ truncate: true });
  await db.Photo.destroy({ truncate: true });
  await db.Review.destroy({ truncate: true });
});

afterAll(async () => {
  await db.Business.drop();
  await db.Photo.drop();
  await db.Review.drop();
});
// create a new review query
// send that query to the server
// should get a response 201

// beforeAll(() => {
//   return initializeDatabase();
// });

// test('server updates database on POST request', () => {
//   //
// })

test('it adds two numbers', () => {
  expect(1 + 1).toBe(2);
});
