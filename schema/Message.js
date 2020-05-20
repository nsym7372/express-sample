var mongoose = require("mongoose");

var Message = mongoose.Schema({
    username: String,
    Message: String,
    date: {type: Date, default: new Date()}
});

module.exports = mongoose.model("Message", Message);