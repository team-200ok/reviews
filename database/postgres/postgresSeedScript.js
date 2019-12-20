/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
const faker = require('faker');

const pool = new Pool({ database: 'reviews' });

const connectToPostgres = (async function () {
  const res = await pool.query(`SELECT
  COLUMN_NAME
FROM
  information_schema.COLUMNS
WHERE
  TABLE_NAME = 'business';`);
  console.log(res);
  await pool.end();
}());

// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack);
//   }
//   client.query('SELECT NOW()', (error, result) => {
//     release();
//     if (error) {
//       return console.error('Error executing query', err.stack)
//     }
//     console.log(result.rows);
//   });
// });


const createBusinessString = function (recordCount) {
  let business = 'id,business_name,claimed,category,business_date,description,\n';
  for (let i = 1; i <= recordCount; i++) {
    business += `${i},`;
    business += `${faker.company.companyName()},`;
    business += `${Math.floor(Math.random() * 2)},`;
    business += `${faker.lorem.word()},`;
    business += `${faker.date.recent()},`;
    business += `${faker.lorem.paragraph()},`;
    business += '\n';
  }
  return business;
};
const createTableCSV = function (createTableString, recordCount, tableName) {
  fs.writeFile(path.resolve(`${tableName}.csv`), createTableString(recordCount), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('CSV created');
    }
  });
};

createTableCSV(createBusinessString, 10, 'business');

// `COPY business FROM ${path.resolve(`postgres${tableName}CSV.txt`)} DELIMITER ',' CSV HEADER`
