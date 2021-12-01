//Import Bio Model
Product = require('./productModel');

//For index
exports.index = function (req, res) {
    Product.get(function (err, product) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Product Successfully!",
            data: product       
        });
    });
};

//For creating new bio
exports.add = function (req, res) {
    var product = new Product();
    product.name = req.body.name? req.body.name: product.name;
    product.price = req.body.price;
    product.description = req.body.description;
    product.Qty = req.body.Qty;
    product.products_id = req.body.products_id;

    //Save and check error
    product.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "New product Added!",
            data: product
        });
    });
};

// View Bio
exports.view = function (req, res) {
    Product.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
        res.json({
            message: 'Product Details',
            data: product
        });
    });
};

// Update Bio
exports.update = function (req, res) {
    Product.findById(req.params.products_id, function (err, product) {
        if (err)
            res.send(err);
            product.name = req.body.name? req.body.name: product.name;
            product.price = req.body.price;
            product.description = req.body.description;
            product.Qty = req.body.Qty;
            product.products_id = req.body.products_id;

        //save and check errors
        product.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Product Updated Successfully",
                data: product
            });
        });
    });
};

// Delete Product
exports.delete = function (req, res) {
    Bio.deleteOne({
        _id: req.params.product_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Product Deleted'
        });
    });
};