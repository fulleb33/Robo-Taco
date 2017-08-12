var db = require("./models/index.js");
var sequelize = require("sequelize");
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

app.use(methodOverride('_method'));

app.use(express.static("./assets"));

var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.listen(PORT, function() {
//     console.log("app listening on PORT " + PORT);
// });

require("./routes/ingredients-api-routes.js")(app);

require("./routes/taco-api-routes.js")(app);

db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("listening on PORT " + PORT);
	});
});