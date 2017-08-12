var sequelize = require("../config/config.json");

module.exports = function(sequelize, DataTypes) {
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
        return (RoboTaco);

    };


// RoboTaco.sync();

// module.exports = RoboTaco;