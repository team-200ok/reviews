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
  db.sequelize.close();
});

describe('GET /api/review/:business_id', () => {
  test('It responds with an array of objects which have properties of reviews and photos for the business', async () => {
    const response = await request(app).get('/api/review/o3fu9nk0hspmvrcp13jw92');
    expect(response.body[0]).toHaveProperty('review_id');
    expect(response.body[0]).toHaveProperty('photo_id');
    expect(response.statusCode).toBe(200);
  });
});

describe('POST /api/review', () => {
  test('It saves a new review to the database', async () => {
    const newReview = await request(app).post('/api/review')
      .send({
        review_id: 'b0yqnoyzon986bhznes0f2',
        business_id: 'o3fu9nk0hspmvrcp13jw92',
        user: 'Jessica',
        stars: 5,
        date: '2019-03-23',
        text: 'Tasty',
        useful: 0,
        funny: 0,
        cool: 1,
      });
    expect(newReview.statusCode).toBe(201);
    const response = await request(app).get('/api/review/o3fu9nk0hspmvrcp13jw92');
    expect(response.body.length).toBe(2);
  });
});

describe('POST /api/photo', () => {
  test('It saves a new photo to the database', async () => {
    const newPhoto = await request(app).post('/api/photo')
      .send({
        review_id: 'b0yqnoyzon986bhznes0f2',
        photo_id: 'j2id4nk0hspmvrcp13jw92',
        caption: 'melt-in-your-mouth',
        label: 'inside',
        imageUrl: 'http://lorempixel.com/640/480/food',
      });
    expect(newPhoto.statusCode).toBe(201);
    // const response = await request(app).get('/api/review/o3fu9nk0hspmvrcp13jw92');
    // expect(response.body.reviews.length).toBe(2);
  });
});

test('it adds two numbers', () => {
  expect(1 + 1).toBe(2);
});
