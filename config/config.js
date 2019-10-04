const Sequelize = require("sequelize");
module.exports = {
  test: {
    dialect: "sqlite",
    storage: ':memory:',
    underscored: true,
    //logging: console.log,
    logging: false
  },
}
