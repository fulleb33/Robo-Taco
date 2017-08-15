// Handlebars.registerHelper('if_eq', function(a, b, opts) {
//     if(a == b) // Or === depending on your needs
//         return opts.fn(this);
//     else
//         return opts.inverse(this);
// });







// var db = require("../../models");

// var Builder = function() {
// var tortillas = [];
// var grains = [];
// var legumes = [];
// var protiens = [];
// var vegtables = [];
// var dairy = [];
// var salsas = [];
// var sides = [];
// var beverages = [];
// var all = [];

// db.ingredients.findAll({}).then(function(results) {
//     all = results;
//     for (var i = 0; i < all.length; i++) {
//         if (all[i].type === "tortilla") {
//             tortillas.push(all[i]);
//         }
//         if (all[i].type === "grain") {
//             grains.push(all[i]);
//         }
//         if (all[i].type === "legume") {
//             legumes.push(all[i]);
//         }
//         if (all[i].type === "protien") {
//             protiens.push(all[i]);
//         }
//         if (all[i].type === "vegtables") {
//             vegtables.push(all[i]);
//         }
//         if (all[i].type === "dairy") {
//             dairy.push(all[i]);
//         }
//         if (all[i].type === "salsa") {
//             salsas.push(all[i]);
//         }
//         if (all[i].type === "sides") {
//             sides.push(all[i]);
//         }
//         if (all[i].type === "beverage") {
//             beverages.push(all[i]);
//         }
//     }
//     //console.log(tortillas);
//     var x = document.createElement("INPUT");
//     x.setAttribute("type", "checkbox");

//     for (var i = 0; i < tortillas.length; i++) {
//         $("#").appendChild(x + " " + tortillas[i].item_name + " : " + tortillas[i].price);
//     }

//     for (var i = 0; i < grains.length; i++) {
//         $("#").appendChild(x + " " + grains[i].item_name + " : " + grains[i].price);
//     }

//     for (var i = 0; i < legumes.length; i++) {
//         $("#").appendChild(x + " " + legumes[i].item_name + " : " + legumes[i].price);
//     }

//     for (var i = 0; i < protiens.length; i++) {
//         $("#").appendChild(x + " " + protiens[i].item_name + " : " + protiens[i].price);
//     }

//     for (var i = 0; i < vegtables.length; i++) {
//         $("#").appendChild(x + " " + vegtables[i].item_name + " : " + vegtables[i].price);
//     }

//     for (var i = 0; i < dairy.length; i++) {
//         $("#").appendChild(x + " " + dairy[i].item_name + " : " + dairy[i].price);
//     }

//     for (var i = 0; i < salsas.length; i++) {
//         $("#").appendChild(x + " " + salsas[i].item_name + " : " + salsas[i].price);
//     }

//     for (var i = 0; i < sides.length; i++) {
//         $("#").appendChild(x + " " + sides[i].item_name + " : " + sides[i].price);
//     }

//     for (var i = 0; i < beverages.length; i++) {
//         $("#").appendChild(x + " " + beverages[i].item_name + " : " + beverages[i].price);
//     }

// });

// }

// Builder();

// module.exports = Builder;