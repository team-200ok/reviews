/* eslint-disable no-console */
const { Pool } = require('pg');

const pool = new Pool({ database: 'reviews' });

function getAllReviewsForGivenBusiness(id) {
  const queryString = `SELECT * FROM business
  INNER JOIN reviews on business.id = reviews.business_id
  INNER JOIN users on users.id = reviews.user_id
  LEFT JOIN comments on reviews.id = comments.parent_id
  LEFT JOIN images on reviews.id = images.reviews_id
  WHERE reviews.business_id = ${id};`;
  return new Promise((resolve, reject) => {
    pool.connect().then(async (client) => {
      const response = await client.query(queryString).catch((err) => {
        client.release();
        console.error('Get query failed: ', err.stack);
        reject(err);
      });
      client.release();
      resolve(response);
    });
  });
}

module.exports = {
  getAllReviewsForGivenBusiness,
};
