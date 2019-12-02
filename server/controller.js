const model = require('./model.js');

module.exports = {
  getBusiness: (id) => {
    return Promise.resolve(model.getBusiness(id));
  },
};
