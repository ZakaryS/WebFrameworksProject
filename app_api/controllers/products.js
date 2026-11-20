const mongoose = require('mongoose');
const Product = mongoose.model('Product');

const productsCreate = (req, res) => {
    Product.create({
        name: req.body.name,
        price: req.body.price,
        mass: req.body.mass,
        type: req.body.type,
        image: req.body.image
    }).then(product => { res.status(201).json(product); }).catch(err => { res.status(400).json({ message: "Error creating product", error: err }); });
};

const productsByType = (req, res) => {
    Product.find().then(products => {
        if (products.length === 0) {
            return res.status(404).json({ message: "No products found." });
        }
        res.status(200).json(products);
    }).catch(err => { res.status(500).json({ message: "Error retrieving products", error: err }); });
};

const productsReadOne = (req, res) => {
    if (req.params && req.params.productid) {
        Product.findById(req.params.productid).then(product => {
            if (!product){
                return res.status(404).json({ message: "Product not found." });
            }
            res.status(200).json(product);
        }).catch(err => {res.status(500).json({ message: "Error retrieving product", error: err }); });
    } else { res.status(400).json({ message: "No productid in request." }); }
};

const productsUpdateOne = (req, res) => {
    if (req.params && req.params.productid) {
        Product.findByIdAndUpdate(req.params.productid, {
            name: req.body.name,
            price: req.body.price,
            mass: req.body.mass,
            type: req.body.type,
            image: req.body.image
        }, { new: true }).then(product => {
            if (!product) {
                return res.status(404).json({ message: "Product not found." });
            }
            res.status(200).json(product);
        }).catch(err=> { res.status(400).json({ message: "Error updating product", error: err }); });
    } else { res.status(400).json({ message: "No productid in request." }); }
};

const productsDeleteOne = (req, res) => {
    res.status(200).json({ "status" : "success" });
};

module.exports = {
    productsCreate,
    productsByType,
    productsReadOne,
    productsUpdateOne,
    productsDeleteOne
}