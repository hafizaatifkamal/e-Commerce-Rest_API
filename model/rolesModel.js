const mongoose = require("mongoose");

const slugURL = require("mongoose-slug-generator");


const rolesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        slug: "name"
    }
}, { timestamps: true });


rolesSchema.pre("save", function(next) {
    this.slug = this.name.split(" ").join("-");
    next();
});


const rolesModel = mongoose.model("role", rolesSchema);

module.exports = rolesModel;