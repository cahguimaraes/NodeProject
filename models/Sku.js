const { Double } = require('bson');
const { Int32 } = require('bson');
const mongoose = require('mongoose');

const Sku = new mongoose.Schema({
    sku: {
        type: String,
        required: true
    },
    inventory: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
},
{
    timestamps : true,
});

mongoose.model('sku', Sku);