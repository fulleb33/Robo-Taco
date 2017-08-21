var sequelize = require("../config/config.json");

module.exports = function(sequelize, DataTypes) {
	var RoboTaco = sequelize.define("RoboTaco", {
		name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		feedback: {
			type: DataTypes.STRING
		}
	});
	return (RoboTaco);
};