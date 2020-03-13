const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to the database"))
    .catch(err => console.log("Connection failed", err))