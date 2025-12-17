//model/prediction.js
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PredictionSchema = new Schema({
    source: String,
    timestamp: { type: Date, default: Date.now }, 
    latencyMs: Number,                            
    features: [Number],                           
    prediction: Number,

    featureCount: Number,
    scalerVersion: String,
    createdAt: { type: Date, default: Date.now },
    targetDate: Date,
    dailyValues: [Number], 
    

});

module.exports = mongoose.model("Prediction", PredictionSchema);