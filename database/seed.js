const Models = require('./index.js');
const sampleData = require('./dataGenerator.js');

Models.Review.sync({ force: true, logging: false })
  .then(() => Models.Review.bulkCreate(sampleData.sampleData.reviews, { logging: false }));
Models.Business.sync({ force: true, logging: false })
  .then(() => Models.Business.bulkCreate(sampleData.sampleData.businesses), { logging: false });
Models.Photo.sync({ force: true, logging: false })
  .then(() => Models.Photo.bulkCreate(sampleData.sampleData.photos), { logging: false });
