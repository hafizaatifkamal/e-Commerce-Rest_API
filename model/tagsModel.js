const mongoose = require("mongoose");

const slugURL = require("mongoose-slug-generator");


const tagsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        lowercase: true,
        slug: "name"
    }
}, { timestamps: true });


tagsSchema.pre("save", function(next) {
    this.slug = this.name.split(" ").join("-");
    next();
});


const tagsModel = mongoose.model("tag", tagsSchema);

module.exports = tagsModel;