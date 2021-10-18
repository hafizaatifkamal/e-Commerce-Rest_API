const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const usersSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter your first name"]
    },
    lastName: String,
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "Please enter your valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter a secret Password for your khajana ki tijori"],
        minlength: [5, "Chota hai kya tera, chal atleast 5 characters enter kar"]
    },
    role: String,
    profileImage: String,
});


usersSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


const usersModel = mongoose.model("user", usersSchema);

module.exports = usersModel;