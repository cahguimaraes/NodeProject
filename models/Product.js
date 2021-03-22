const { Int32 } = require('bson');
const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},
{
    timestamps : true,
});

mongoose.model('product', Product);