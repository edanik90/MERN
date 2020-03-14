const { Product } = require('../models/produt.model');

module.exports = {
    create: (req, res) => {
        const { title, price, description } = req.body;
        Product.create({title, price, description})
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },
    getProduct: (req, res) => {
        Product.findById(req.params.id)
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },
    getAllProducts: (req, res) => {
        Product.find()
            .then(allProducts => res.json(allProducts))
            .catch(err => res.json(err))
    },
    updateProduct: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, {runValidators:true})
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },
    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then(product => res.json(product))
            .catch(err => res.json(err))
    }
}