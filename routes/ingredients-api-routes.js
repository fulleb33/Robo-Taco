var db = require("../models");

module.exports = function(app) {

	app.get("/api/ingredients", function(req, res) {
		db.ingredients.findAll({}).then(function(results) {
			res.json(results);
		});
	});

	app.get("/api/ingredients/:id", function(req, res) {
		db.ingredients.findOne({
			where: {
				id: req.params.id
			}
		}).then(function(results) {
			res.json(results);
		});
	});

	app.post("/api/ingredients", function(req, res) {
		db.ingredients.create(
		  {
			item_name: req.body.item_name,
			type: req.body.type,
			price: req.body.price
		  }
		).then(function(results) {
			res.json(results);
		});
	});

	app.delete("/api/ingredients/:id", function(req, res) {
		db.ingredients.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(results) {
			res.json(results);
		});
	});

	app.put("/api/ingredients", function(req, res) {
		db.ingredients.update(
		  {
		  	item_name: req.body.name,
		  	type: req.body.type,
		  	price: req.body.price
		  }, {
		  where: {
		  	id: req.body.id
		  }}
		).then(function(results) {
			res.json(results);
		});
	});

};