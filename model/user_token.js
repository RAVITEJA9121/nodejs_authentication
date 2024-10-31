const mongoose = require("mongoose");

const userToken = mongoose.Schema({
    userId: {
        type: 'ObjectId',
        required: true
    },
    token: {
        type: "UUID"
    }
}, { timestamps: true });


const authModel = mongoose.model("authentication", userToken);

module.exports = authModel;