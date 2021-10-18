const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    image: String,
    description: String
});

const categoriesModel = mongoose.model("categorie", categoriesSchema);

module.exports = categoriesModel;