var db = require("../models");

module.exports = function(app) {

	app.get("/api/tacos", function(req, res) {
		db.RoboTaco.findAll({}).then(function(results) {
			res.json(results);
		});
	});

	app.post("/api/tacos", function(req, res) {
		db.RoboTaco.create()
	});
}