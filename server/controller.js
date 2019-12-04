const model = require('./model.js');

module.exports = {
  getBusiness: (id) => Promise.resolve(model.getBusiness(id)),
  getReviews: (id) => Promise.resolve(model.getReviews(id)),
  getReviewsAndPhotos: (id) => Promise.resolve(model.getReviewsAndPhotos(id)),
};
