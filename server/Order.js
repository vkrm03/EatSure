const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    usr: String,
    items: [
        {
            id: String,
            img: String,
            name: String,
            quantity: Number,
            prize: String,
        },
    ],
    total: Number,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
