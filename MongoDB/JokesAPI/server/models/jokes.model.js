const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup:{
        type:String,
        required:[true, "Setup for joke is required!"]
    },
    punchline:{
        type:String,
        required:[true, "Punchline is required"]
    }
}, {timestamps:true}),
    Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;