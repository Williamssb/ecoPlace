const express = require('express');

const router = express.Router();

const apiProductsControllers = require ('../../controllers/api/productController');



router.get('/products/', apiProductsControllers.count); 

// router.get("/products/category", apiProductsControllers.countByCategories) 

router.get('/products/:id', apiProductsControllers.productDetail); 



module.exports = router;