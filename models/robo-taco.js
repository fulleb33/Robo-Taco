var sequelize = require("../config/connection.js");

var RoboTaco = sequelize.define("robo-taco", {
  taco_name: {
    type: Sequelize.STRING,
    allowNull: true
  }, 
  ingredients: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.FLOAT
  }
});

RoboTaco.sync();

module.exports = RoboTaco;
