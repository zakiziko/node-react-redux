const express = require('express');
const route = express.Router();
const connection = require('../connection/mysqlConnect');
const _ = require('lodash');

route.get('/products',(req,res)=>{
    connection.query(`
    SELECT product.name as prodName,product.description as prodDesc,product.price,product.image,product.image_2,
    category.name as categoName,department.name as dept,department.description,product.discounted_price,product.product_id 
    FROM product INNER JOIN product_category on product.product_id = product_category.product_id INNER JOIN 
    category on category.category_id = product_category.category_id INNER JOIN 
    department on department.department_id = category.department_id
    `, function (err, result) {
        if (err) res.json(err);
        res.json(_.groupBy(result,'dept'));
    });
});

route.get('/products/departement/:id',(req,res)=>{
    const departement = req.params.id;
    connection.query(`
    SELECT product.name as prodName,product.description as prodDesc,product.price,product.image,product.image_2,
    category.name as categoName,department.name as dept,department.description,product.discounted_price, product.product_id
    FROM product INNER JOIN product_category on product.product_id = product_category.product_id INNER JOIN 
    category on category.category_id = product_category.category_id INNER JOIN 
    department on department.department_id = category.department_id
    where department.department_id=`+departement+`
    `, function (err, result) {
        if (err) res.json(err);
        res.json(_.groupBy(result,'categoName'));
    });
});

route.get('/products/:id',(req,res)=>{
    const product = req.params.id;
    connection.query(`
    SELECT product.name as prodName,product.description as prodDesc,product.price,product.image,product.image_2,
    category.name as categoName,department.name as dept,department.description,product.discounted_price, product.product_id
    FROM product INNER JOIN product_category on product.product_id = product_category.product_id INNER JOIN 
    category on category.category_id = product_category.category_id INNER JOIN 
    department on department.department_id = category.department_id
    where product.product_id=`+product+`
    `, function (err, result) {
        if (err) res.json(err);
        res.json(result);
    });
});

module.exports = route;