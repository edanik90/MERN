const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allDBJokes => res.json({ jokes: allDBJokes }))
        .catch(err => res.json({ message: "Error", error: err }));
};

module.exports.findJoke = (req, res) => {
    Joke.findById(req.params.id)
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: "Error", error: err }));
};

module.exports.findRandomJoke = (req, res) => {
    let rand = Math.floor(Math.random() * Joke.countDocuments());
    Joke.findOne().skip(rand)
        .then(randomJoke => res.json({ joke: randomJoke }))
        .catch(err => res.json({ message: "Error", error: err }));
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({ message: "Error", error: err }));
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: "Error", error: err }));
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Error", error: err }));
};