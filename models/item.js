const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    description: {type: String, required: true},
    price: {type: Number, required: true },
    quantity: {type: Number, required: true}
})

const item = mongoose.model('Item', itemSchema);

module.exports = Item
