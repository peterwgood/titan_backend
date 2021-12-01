var mongoose = require('mongoose');

//schema
var productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Qty: {
        type: String,
        required: true
    },
    product_id: {
        type: String,
        require: true
    }
});

// Export Bio Model
var Product = module.exports = mongoose.model('product', productSchema);

module.exports.get = function (callback, limit) {
   Product.find(callback).limit(limit); 
}