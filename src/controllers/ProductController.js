const mongoose = require ('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const products = await Product.find();

        return res.json(products);
    },
    async show(req, res){
        //ERRO GERADO AO INVERTER (req, res) por (res,req)
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },
    async store(req, res){
        //CRIAÇÃO
        const product = await Product.create(req.body);

        return res.json(product);
    },
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(product);
    //APOS A CRIACAO DO UPDATE CRIAR ROTA
    //METODO FUNCIONA POREM APRESENTA WARNING

    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();

    },



};