const mongoose = require('mongoose');

const vcSchema = new mongoose.Schema({
    name: String,
    email: String,
    profile: String,
    industries: [String]
});

module.exports = mongoose.model('VC', vcSchema);
