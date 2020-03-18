const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please, enter the name"],
        minlength: [3, "Name must be at least 3 characters"]
    },
    book1: String,
    book2: String,
    book3: String
}, { timestamps: true })

module.exports.Author = mongoose.model("Author", AuthorSchema);