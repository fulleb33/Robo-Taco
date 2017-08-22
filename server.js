var db = require("./models/index.js");
var sequelize = require("sequelize");
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var handlebars = require('handlebars');

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

require("./routes/ingredients-api-routes.js")(app);

require("./routes/taco-api-routes.js")(app);

handlebars.registerHelper('if_eq', function(a, b, opts) {
     if(a == b)
         return opts.fn(this);
     else
         return opts.inverse(this);
});

handlebars.registerHelper('if_ls', function(a, b, opts) {
    if(a < b)
        return opts.fn(this);
    else
        return opts.inverse(this);
});

db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("listening on PORT " + PORT);
	});
});

function sendMail(email, message) {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILER_USER,
            pass: process.env.MAILER_PWD
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"BYT" <eatbeforeyouspeak@gmail.com>', // sender address
        to: '<colindavidmcdonnell@gmail.com', // list of receivers
        subject: 'Your thoughts when hungry', // Subject line
        text: message, // plain text body
        html: message // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        //console.log('Message %s sent: %s', info.messageId, info.response);
    });
}

dbReference.on('value', function(snapshot) {
    sendMail(snapshot.val().email, snapshot.val().message);
});