const express = require('express');
const controllerSDC = require('./controller');

const router = express.Router();

router.get('/business/:businessId', controllerSDC.getReviewsForBusiness);

module.exports = router;
