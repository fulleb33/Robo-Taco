var sequelize = require("../config/config.json");

module.exports = function(sequelize, DataTypes) {
    var ingredients = sequelize.define("ingredients", {
        item_name: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.FLOAT
        }
    })
    return ingredients;
};