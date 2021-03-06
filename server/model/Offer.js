const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
    offerName: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    offerType: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    offerAmount: {
        type: Number,
        required: true,
        min: 6,
        max: 255,
    },
    productCategory: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    products :[
        {
            productID :  {
                type : String,
                required : true,
            }
        }
    ],
    offerImageURL: {
        type : String,
        required : true,
    },
    offerCode: {
        type : String,
        required : true,
    },
    offerEndDate: {
        type : Date,
        required : true,
    },

});

module.exports = mongoose.model("Offer", OfferSchema);
