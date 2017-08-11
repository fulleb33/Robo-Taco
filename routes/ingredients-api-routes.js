var db = require("../models");

module.exports = function(app) {

	app.get("/", function(req, res) {
		db.Ingredients.findAll({}).then(function(results) {
			var hbsObject = {
				ingredients: results
			}
			res.json(results);
			res.render("index", hbsObject);
		});
	});

	app.get("/api/ingredients/:id", function(req, res) {
		db.Ingredients.findOne({
			where: {
				id: req.params.id
			}
		}).then(function(results) {
			res.json(results);
		});
	});

	app.post("/api/ingredients", function(req, res) {
		db.Ingredients.create(
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
		db.Ingredients.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(results) {
			res.json(results);
		});
	});

	app.put("/api/ingredients", function(req, res) {
		db.Ingredients.update(
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