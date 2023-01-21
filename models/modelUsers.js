const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = Schema({
    _id: {
        type: Number,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    mobilephone: {
        type: String,
        require: true,
    },
    estado: {
        type: Boolean,
        require: true,
        default: false,
    },
    create_at: {
        type: Date,
        require: true,
        default: Date.now,
    },
});

module.exports = mongoose.model("Users", UsersSchema);
