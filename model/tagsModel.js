const mongoose = require("mongoose");

const tagsSchema = mongoose.Schema({
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

const tagsModel = mongoose.model("tag", tagsSchema);

module.exports = tagsModel;