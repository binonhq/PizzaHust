const mongoose = require("mongoose");

const { Schema } = mongoose;

const PizzaSchema = new Schema({
   title: { type: String, require: true },
   price_s: { type: Number, require: true },
   price_m: { type: Number, require: true },
   price_l: { type: Number, require: true },
})

const PizzaModel = mongoose.model('Pizza', PizzaSchema);

module.exports = PizzaModel;
