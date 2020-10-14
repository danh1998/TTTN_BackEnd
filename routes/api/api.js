const express = require('express');
const route = express.Router();


//middleware
const checkTokenMiddleware = require('../../middlewares/checktoken');

//controller api
const brandApiController = require('../../controllers/api/brand');
const menuApiController = require("../../controllers/api/menu");
const sliderApiController = require('../../controllers/api/slider');
const userApiController = require('../../controllers/api/user');
const productApiController = require('../../controllers/api/product');
const orderApiController = require('../../controllers/api/order');

//brand
route.get('/brand', brandApiController.getAllBrand);

//list menu
route.get('/menu', menuApiController.getMenu);

//slider
route.get('/slider', sliderApiController.getSlider);

//user
route.post('/auth', userApiController.login);

//product
route.get('/product', productApiController.processGetProduct);
route.get('/product/getrandom', productApiController.processGetProductRandom);
route.get('/product/:id', productApiController.processGetProductDetail);

//order
route.post('/order', checkTokenMiddleware.checkToken, orderApiController.processPostOrder);

//user
route.post('/user/register', userApiController.processCreateUser);
route.post('/user/login', userApiController.login);

module.exports = route;