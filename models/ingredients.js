var sequelize = require("../config/config.json");

// var Ingredients = sequelize.define("ingredients", {
//   item_name: {
//     type: Sequelize.STRING,
//   },
//   type: {
//     type: Sequelize.STRING,
//   },
//   price: {
//     type: Sequelize.FLOAT
//   }
// });

// Ingredients.sync();

// module.exports = Ingredients;

module.exports = function(sequelize, DataTypes) {
        var Ingredients = sequelize.define("ingredients", {
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
                return Ingredients;
            };