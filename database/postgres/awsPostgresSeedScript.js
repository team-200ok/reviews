/* eslint-disable no-console */
/* eslint-disable func-names */
const fs = require('fs');
const path = require('path');
const faker = require('faker');

const writeUserRow = function () {
  let userString = '';
  userString += `${faker.name.firstName()},`;
  userString += `${faker.name.lastName()},`;
  userString += `${faker.internet.email()},`;
  userString += `${faker.date.recent()},`;
  userString += `${Math.floor(Math.random() * 10000)},`;
  userString += `${Math.floor(Math.random() * 10000)},`;
  userString += `${Math.floor(Math.random() * 300)},`;
  userString += `${faker.random.locale()},`;
  userString += `${faker.address.city()}`;
  return userString;
};

const writeBusinessRow = function () {
  let businessString = '';
  businessString += `${faker.lorem.word()},`;
  businessString += `${Math.floor(Math.random() * 2)},`;
  businessString += `${faker.lorem.word()},`;
  businessString += `${faker.date.recent()},`;
  businessString += `${Math.floor(Math.random() * 10000) + 1},`;
  businessString += `${faker.lorem.sentence()}`;
  return businessString;
};

const writeReviewsRow = function () {
  let reviewsString = '';
  reviewsString += `${faker.date.recent()},`;
  reviewsString += `${faker.lorem.sentences()},`;
  reviewsString += `${Math.floor(Math.random() * 5 + 1)},`;
  reviewsString += `${Math.floor(Math.random() * 10000)},`;
  reviewsString += `${Math.floor(Math.random() * 10000)},`;
  reviewsString += `${Math.floor(Math.random() * 10000)},`;
  reviewsString += `${Math.floor(Math.random() * 10000000) + 1},`;
  reviewsString += `${Math.floor(Math.random() * 10000000) + 1}`;
  return reviewsString;
};

const writeCommentsRow = function () {
  let commentsString = '';
  commentsString += `${faker.date.recent()},`;
  commentsString += `${faker.lorem.paragraph()},`;
  commentsString += `${Math.floor(Math.random() * 50000000) + 1},`;
  commentsString += `${Math.floor(Math.random() * 10000000) + 1}`;
  return commentsString;
};

const writeImagesRow = function () {
  let imagesString = '';
  imagesString += `https://loremflickr.com/320/240?lock=${Math.floor(Math.random() * 30000)},`;
  imagesString += `${faker.date.recent()},`;
  imagesString += `${faker.lorem.words()},`;
  imagesString += `${Math.floor(Math.random() * 50000000) + 1},`;
  imagesString += `${Math.floor(Math.random() * 10000000) + 1}`;
  return imagesString;
};

const writeCSV = (writer, encoding, rows, writeTableRow, tableName) => {
  console.log(`writing ${tableName}...`);
  let i = rows;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      let data = writeTableRow();
      if (i !== 0) {
        data += '\n';
      }
      if (i === 0) {
        writer.write(data, encoding);
        console.log('done writing restaurants');
      } else {
        ok = writer.write(data, encoding);
      }
      if (i === Math.floor(rows / 2)) {
        console.log('halfway there!');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};
writeCSV(fs.createWriteStream(path.resolve('users.csv')), 'utf-8', 10000000, writeUserRow, 'users');
writeCSV(fs.createWriteStream(path.resolve('business.csv')), 'utf-8', 10000000, writeBusinessRow, 'business');
writeCSV(fs.createWriteStream(path.resolve('reviews.csv')), 'utf-8', 8000000, writeReviewsRow, 'reviews');
writeCSV(fs.createWriteStream(path.resolve('comments.csv')), 'utf-8', 5000000, writeCommentsRow, 'comments');
writeCSV(fs.createWriteStream(path.resolve('images.csv')), 'utf-8', 5000000, writeImagesRow, 'images');
