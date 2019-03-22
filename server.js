const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connection = require('./dao/connection/mysqlConnect');
const products = require('./dao/routes/products');
const port = 4001;
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/web"));
app.listen(port,()=>{
    console.log('SERVER IS RUNNING ON : '+port);
});

connection.connect((err)=>{
    if(err) throw err;
    console.log('CONNECTED TO MYSQL SUCCEFFULYS');
});
app.use('/api',products);

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/web/index.html'));
});
