const express = require ("express");
const mongoose = require ("mongoose");
const requireDir = require('require-dir');


//INICIANDO O APP
const app = express();

// INICIANDO O DB
mongoose.connect('mongodb://192.168.99.100:27017/nodeapi', 
{ useNewUrlParser: true, useUnifiedTopology: true});
//, {useNewUrlParser: True}


requireDir('./src/models');

//const Product = mongoose.model('Product');

//ROTAS
app.use('/api', require('./src/routes'));

app.listen(3001);