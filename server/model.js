const db = require('../database/index.js');

module.exports = {
  getBusiness: (id) => db.Business.findOne({ where: { business_id: id } }),
  getReviews: (id) => db.Review.findAll({ where: { business_id: id } }),
  getReviewsAndPhotos: (id) => {
    // now do a join table: find all Reviews with the given business id,
    // get those review ids, and find all photos with those review ids
    return db.sequelize.query(`select * from reviews R INNER JOIN photos P on R.review_id=P.review_id where R.business_id='${id}';`, { type: db.sequelize.QueryTypes.SELECT })
      .then((results) => results);
    // right now this query is returning a join table with review info AND photo info
    // This could be useful. I'll leave it like this for now
  },
};
