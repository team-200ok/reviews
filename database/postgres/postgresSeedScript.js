/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
const { Pool } = require('pg');
const fs = require('fs').promises;
const path = require('path');
const faker = require('faker');

const pool = new Pool({ database: 'reviews' });

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

const createBusinessString = function (recordCount) {
  let business = '';
  for (let i = 1; i <= recordCount; i++) {
    business += `${faker.lorem.word()},`;
    business += `${Math.floor(Math.random() * 2)},`;
    business += `${faker.lorem.word()},`;
    business += `${faker.date.recent()},`;
    business += `${Math.floor(Math.random() * 10000 + 1)},`;
    business += `${faker.lorem.sentence()}`;
    business += '\n';
  }
  return business.slice(0, -1);
};

const createUsersString = function (recordCount) {
  let users = '';
  for (let i = 1; i <= recordCount; i++) {
    users += `${faker.name.firstName()},`;
    users += `${faker.name.lastName()},`;
    users += `${faker.internet.email()},`;
    users += `${faker.date.recent()},`;
    users += `${Math.floor(Math.random() * 10000)},`;
    users += `${Math.floor(Math.random() * 10000)},`;
    users += `${Math.floor(Math.random() * 300)},`;
    users += `${faker.random.locale()},`;
    users += `${faker.address.city()}`;
    // users += `${'https://loremflickr.com/320/240'}`;
    users += '\n';
  }

  return users.slice(0, -1);
};

const createReviewsString = function (recordCount) {
  let reviews = '';
  for (let i = 1; i <= recordCount; i++) {
    reviews += `${faker.date.recent()},`;
    reviews += `${faker.lorem.sentences()},`;
    reviews += `${Math.floor(Math.random() * 5 + 1)},`;
    reviews += `${Math.floor(Math.random() * 10000)},`;
    reviews += `${Math.floor(Math.random() * 10000)},`;
    reviews += `${Math.floor(Math.random() * 10000)},`;
    reviews += `${Math.floor(Math.random() * 1000000)},`;
    reviews += `${Math.floor(Math.random() * 1000000)}`;
    if (i !== recordCount) { reviews += '\n'; }
  }

  return reviews;
};

const createCommentsString = function (recordCount) {
  let comments = '';
  for (let i = 1; i <= recordCount; i++) {
    comments += `${faker.date.recent()},`;
    comments += `${faker.lorem.paragraph()},`;
    comments += `${Math.floor(Math.random() * 100000000)},`;
    comments += `${Math.floor(Math.random() * 100000)}`;
    if (i !== recordCount) { comments += '\n'; }
  }

  return comments;
};

const createImagesString = function (recordCount) {
  let images = '';
  for (let i = 1; i <= recordCount; i++) {
    images += `https://loremflickr.com/320/240?lock=${Math.floor(Math.random() * 30000)},`;
    images += `${faker.date.recent()},`;
    images += `${faker.lorem.words()},`;
    images += `${Math.floor(Math.random() * 100000000)},`;
    images += `${Math.floor(Math.random() * 100000)}`;
    if (i !== recordCount) { images += '\n'; }
  }

  return images;
};

const createTableCSV = function (createTableString, recordCount, tableName) {
  fs.writeFile(path.resolve(`${tableName}.csv`), createTableString(recordCount)).then(() => {
    console.log('CSV generated');
  })
    .catch((err) => {
      console.error(err.stack);
    })
};

const connectToPostgres = async function () {
  const start = new Date();
  const promises = [];
  await createTableCSV(createUsersString, 1000000, 'users');
  for (let i = 0; i < 10; i++) {
    // eslint-disable-next-line quotes
    promises.push(pool
      .connect()
      .then(async (client) => client
        .query(`COPY users(first_name,last_name,email,user_date,friend_count,review_count,image_count,region,city) FROM '${path.resolve('users.csv')}' DELIMITER ',';`)
        .then((res) => {
          client.release();
        })
        .catch((err) => {
          client.release();
          console.log(err.stack);
        })));
  }
  Promise.all(promises).then(() => {
    console.log(`This query took ${new Date() - start} milliseconds`);
  })
    .catch((error) => {
      console.error('Promise.all errored out', error.stack);
    });
};

// connectToPostgres();

const seedBusinesses = async function () {
  const start = new Date();
  const promises = [];
  await createTableCSV(createBusinessString, 1000000, 'business');
  for (let i = 0; i < 10; i++) {
    // eslint-disable-next-line quotes
    promises.push(pool
      .connect()
      .then(async (client) => client
        .query(`COPY business(business_name,claimed,category,business_date,user_id,description) FROM '${path.resolve('business.csv')}' DELIMITER ',';`)
        .then((res) => {
          client.release();
        })
        .catch((err) => {
          client.release();
          console.log(err.stack);
        })));
  }
  Promise.all(promises).then(() => {
    console.log(`This query took ${(new Date() - start) / 1000} seconds`);
  })
    .catch((error) => {
      console.error('Promise.all errored out', error.stack);
    });
};

// seedBusinesses();

const seedReviews = async function () {
  const start = new Date();
  const promises = [];
  await createTableCSV(createReviewsString, 2000000, 'reviews');
  for (let i = 0; i < 25; i++) {
    // eslint-disable-next-line quotes
    promises.push(pool
      .connect()
      .then(async (client) => client
        .query(`COPY reviews(review_date,review_text,star_count,useful_count,funny_count,cool_count,business_id,user_id) FROM '${path.resolve('reviews.csv')}' DELIMITER ',';`)
        .then((res) => {
          client.release();
        })
        .catch((err) => {
          client.release();
          console.log(err.stack);
        })));
  }
  Promise.all(promises).then(() => {
    console.log(`This query took ${(new Date() - start) / 1000} seconds`);
  })
    .catch((error) => {
      console.error('Promise.all errored out', error.stack);
    });
};

const seedComments = async function () {
  const start = new Date();
  const promises = [];
  await createTableCSV(createCommentsString, 1000000, 'comments');
  for (let i = 0; i < 2; i++) {
    // eslint-disable-next-line quotes
    promises.push(pool
      .connect()
      .then(async (client) => client
        .query(`COPY comments(comment_date,comment_text,parent_id,user_id) FROM '${path.resolve('comments.csv')}' DELIMITER ',';`)
        .then((res) => {
          client.release();
        })
        .catch((err) => {
          client.release();
          console.log(err.stack);
        })));
  }
  Promise.all(promises).then(() => {
    console.log(`This query took ${(new Date() - start) / 1000} seconds`);
  })
    .catch((error) => {
      console.error('Promise.all errored out', error.stack);
    });
};
// seedComments();

const seedImages = async function () {
  const start = new Date();
  const promises = [];
  await createTableCSV(createImagesString, 1000000, 'images');
  for (let i = 0; i < 2; i++) {
    // eslint-disable-next-line quotes
    promises.push(pool
      .connect()
      .then(async (client) => client
        .query(`COPY images(image_url,image_date,caption,reviews_id,user_id) FROM '${path.resolve('images.csv')}' DELIMITER ',';`)
        .then((res) => {
          client.release();
        })
        .catch((err) => {
          client.release();
          console.log(err.stack);
        })));
  }
  Promise.all(promises).then(() => {
    console.log(`This query took ${(new Date() - start) / 1000} seconds`);
  })
    .catch((error) => {
      console.error('Promise.all errored out', error.stack);
    });
};

seedImages();
