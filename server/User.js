const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    usrName: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    PassWord: { type: String, required: true },
});

module.exports = mongoose.model("Users", userSchema);
