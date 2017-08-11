var sequelize = require("../config/connection.js");

var Ingredients = sequelize.define("ingredients", {
  item_name: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.FLOAT
  }
});

Ingredients.sync();

module.exports = Ingredients;