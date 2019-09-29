const { sequelize } = require('../../src/app/models');

// eslint-disable-next-line max-len
module.exports = () => Promise.all(Object.keys(sequelize.models).map((key) => sequelize.models[key].destroy({
  truncate: true,
  force: true,
})));
