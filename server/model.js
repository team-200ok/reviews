const db = require('../database/index.js');

module.exports = {
  getBusiness: (id) => {
    return db.Business.findOne({ where: { business_id: id } });
  },
};
