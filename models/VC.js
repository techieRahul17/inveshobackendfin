const mongoose = require("mongoose");

const vcSchema = new mongoose.Schema({
    name: String,
    industry: String,
    profile: String,
    email: {
        type: String,
        validate: {
            validator: function (v) {
                // Basic email regex validation
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: (props) => `${props.value} is not a valid email address!`,
        },
        required: [true, "Email required"],
    },
});

module.exports = mongoose.model("VC", vcSchema);
