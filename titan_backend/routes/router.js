
//initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'First API'
    });
});

//Import Bio Controller
var productController = require('./productController');

// Bio routes
router.route('/products')
    .get(productController.index)
    .post(productController.add);

router.route('/products/:products_id')
    .get(productController.view)
    .patch(productController.update)
    .put(productController.update)
    .delete(productController.delete);

//Export API routes
module.exports = router;