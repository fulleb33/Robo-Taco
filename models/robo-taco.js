var sequelize = require("../config/connection.js");

var RoboTaco = sequelize.define("robo-taco", {
  taco_name: {
    type: DataTypes.STRING,
    allowNull: true
  }, 
  ingredients: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.FLOAT
  }
});

RoboTaco.sync();

module.exports = RoboTaco;
