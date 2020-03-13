const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.post("/api/product/create", ProductController.create);
}