const db = require('../database/index.js');

module.exports = {
  getBusiness: (id) => db.Business.findOne({ where: { id } }),
  getReviews: (id) => db.Review.findAll({ where: { business_id: id } }),
  // eslint-disable-next-line arrow-body-style
  getReviewsAndPhotos: (id) => {
    // now do a join table: find all Reviews with the given business id,
    // get those review ids, and find all photos with those review ids
    return db.sequelize.query(`select * from reviews R INNER JOIN photos P on R.review_id=P.review_id where R.business_id='${id}';`, { type: db.sequelize.QueryTypes.SELECT })
      .then((results) => results);
    // right now this query is returning a join table with review info AND photo info
    // This could be useful. I'll leave it like this for now
  },
  postReview: (data) => db.Review.create({
    review_id: data.review_id,
    business_id: data.business_id,
    user: data.user,
    stars: data.stars,
    date: data.date,
    text: data.text,
  }),
  postPhoto: (data) => db.Photo.create({
    photo_id: data.photo_id,
    review_id: data.review_id,
    caption: data.caption,
    label: data.label,
    imageUrl: data.imageUrl,
  }),
  putVote: (review_id, vote) => db.Review.findOne({ where: { review_id } })
    .then(review => review.increment(vote, {by: 1}))
    .then(review => db.Review.findOne({ where: { review_id } })),
};
