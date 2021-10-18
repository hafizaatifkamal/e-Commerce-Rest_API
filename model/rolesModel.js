const mongoose = require("mongoose");

const rolesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        lowecase: true
    }
});

const rolesModal = mongoose.model("Roles", rolesSchema);

module.exports = rolesModal;