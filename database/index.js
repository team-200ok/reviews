// eslint-disable-next-line import/newline-after-import
const Sequelize = require('sequelize');
const useDb = process.env.NODE_ENV === 'test' ? 'yumnoms_test' : 'yumnoms';

const sequelize = new Sequelize(useDb, 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const Review = sequelize.define('review', {
  review_id: { type: Sequelize.STRING },
  business_id: { type: Sequelize.STRING },
  user: { type: Sequelize.STRING },
  stars: { type: Sequelize.INTEGER },
  date: { type: Sequelize.DATEONLY },
  text: { type: Sequelize.TEXT },
  useful: { type: Sequelize.INTEGER },
  funny: { type: Sequelize.INTEGER },
  cool: { type: Sequelize.INTEGER },
});

const Business = sequelize.define('business', {
  business_id: { type: Sequelize.STRING },
  name: { type: Sequelize.STRING },
});

const Photo = sequelize.define('photo', {
  photo_id: { type: Sequelize.STRING },
  review_id: { type: Sequelize.STRING },
  caption: { type: Sequelize.STRING },
  label: { type: Sequelize.STRING },
  imageUrl: { type: Sequelize.STRING },
});

module.exports = {
  sequelize,
  Review,
  Business,
  Photo,
};
