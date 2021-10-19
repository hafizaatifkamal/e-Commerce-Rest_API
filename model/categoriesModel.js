const mongoose = require("mongoose");

const slugURL = require("mongoose-slug-generator");

const categoriesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: String,
    description: String,
    slug: {
        type: String,
        lowercase: true,
        slug: "name"
    }
}, { timestamp: true });


categoriesSchema.pre("save", function(next) {
    this.slug = this.name.split(" ").join("-");
    next();
});


const categoriesModel = mongoose.model("categorie", categoriesSchema);

module.exports = categoriesModel;