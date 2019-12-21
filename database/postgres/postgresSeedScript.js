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
    business += `${faker.company.companyName()},`;
    business += `${Math.floor(Math.random() * 2)},`;
    business += `${faker.lorem.word()},`;
    business += `${faker.date.recent()},`;
    business += `${Math.floor(Math.random() * 10000 + 1)}`;
    business += `${faker.lorem.paragraph()},`;
    business += '\n';
  }
  return business;
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

const createTableCSV = function (createTableString, recordCount, tableName) {
  return fs.writeFile(path.resolve(`${tableName}.csv`), createTableString(recordCount));
};

const connectToPostgres = async function () {
  const start = new Date();
  let promises = [];
  for (let i = 0; i < 10; i++) {
    // eslint-disable-next-line quotes
    promises.push((async () => {
      await createTableCSV(createUsersString, 1000000, 'users');
      const client = await pool.connect();
      try {
        const res = await client.query(`COPY users(first_name,last_name,email,user_date,friend_count,review_count,image_count,region,city) FROM '${path.resolve('users.csv')}' DELIMITER ',';`)
        console.log(res.rows[0]);
      } finally {
        client.release();
      }
    })().catch((err) => { console.log(err.stack); }));
    // pool.connect((err, client, done) => {
    //   client.query(`COPY users(first_name,last_name,email,user_date,friend_count,review_count,image_count,region,city) FROM '${path.resolve('users.csv')}' DELIMITER ',';`)
    //     .catch((err) => {
    //       console.error('Error executing query', err.stack);
    //     });

    // })
  }
  Promise.all(promises).then(() => {
    console.log(`This query took ${new Date() - start} milliseconds`);
  })
    .catch(error => {
      console.error(error.stack);
    })
  // await pool.end();
  // console.log(res);
};

connectToPostgres();
