const { getAllReviewsForGivenBusiness } = require('./model');

function getReviewsForBusiness(req, res) {
  getAllReviewsForGivenBusiness(req.params.businessId)
    .then((response) => {
      res.status(200).send(JSON.stringify(response));
    })
    .catch(() => {
      res.status(500).end('Failed to retrieve');
    });
}

module.exports = {
  getReviewsForBusiness,
};
