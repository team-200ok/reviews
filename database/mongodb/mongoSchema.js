/* eslint-disable func-names */
/* eslint-disable no-console */


const faker = require('faker');

const createBusiness = function () {
  const businesses = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 100000; i++) {
    businesses.push({
      id: i,
      business_name: faker.company.companyName(),
      claimed: Math.floor(Math.random() * 2),
      category: faker.lorem.word(),
      business_date: faker.date.recent(),
      description: faker.lorem.paragraph(),
    });
  }
  console.log('business array completed');
  return businesses;
};
const createUsers = function () {
  console.log('initializing users array');
  const users = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 100000; i++) {
    users.push({
      id: i,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
      user_date: faker.date.recent(),
      friend_count: Math.floor(Math.random() * 10000),
      review_count: Math.floor(Math.random() * 10000),
      image_count: Math.floor(Math.random() * 300),
      location: faker.random.locale(),
      avatar_url: 'https://loremflickr.com/320/240',
    });
  }
  console.log('users array completed');
  return users;
};

const createReviews = function () {
  console.log('initializing reviews array');
  const reviews = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 100000; i++) {
    reviews.push({
      id: i,
      review_date: faker.date.recent(),
      review_text: faker.lorem.paragraph(),
      star_count: Math.floor(Math.random() * 5 + 1),
      useful_count: Math.floor(Math.random() * 50),
      funny_count: Math.floor(Math.random() * 50),
      cool_count: Math.floor(Math.random() * 50),
      images: createImageArray(),
      business_id: Math.floor(Math.random() * 100000 + 1),
      user_id: Math.floor(Math.random() * 100000 + 1),
    });
  }
  console.log('reviews array completed');
  return reviews;
};

const createComments = function () {
  console.log('initializing comments array');
  const comments = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 100000; i++) {
    comments.push({
      id: i,
      comment_date: faker.date.recent(),
      comment_text: faker.lorem.paragraph(),
      parent_id: Math.floor(Math.random() * 100000 + 1),
      user_id: Math.floor(Math.random() * 100000 + 1),
    });
  }
  console.log('comments array completed');
  return comments;
};

const createImages = function () {
  console.log('initializing images array');
  const images = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 100000; i++) {
    images.push({
      id: i,
      image_url: `https://loremflickr.com/320/240?lock=${Math.floor(Math.random() * 30000)}`,
      image_date: faker.date.recent(),
      caption: faker.lorem.sentence(),
      reviews_id: Math.floor(Math.random() * 100000 + 1),
      user_id: Math.floor(Math.random() * 100000 + 1),
    });
  }
  console.log('images array completed');
  return images;
};

// helper functions
const createImageArray = function (upperBound) {
  const imageArray = [];
  let iterationCap = Math.floor(Math.random() * 5 + 1);
  for (let i = 0; i < iterationCap; i++) {
    imageArray.push(createImages());
  }
  return imageArray;
}

module.exports = {
  createBusiness,
  createUsers,
  createReviews,
  createComments,
  createImages,
};
