'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PredictionSchema = new Schema({
    source: String,
    timestamp: { type: Date, default: Date.now }, // Cuándo se hizo
    latencyMs: Number,                            // Cuánto tardó
    features: [Number],                           // Los datos de entrada (array de números)
    prediction: Number,

    featureCount: Number,
    scalerVersion: String,
    createdAt: { type: Date, default: Date.now },
    targetDate: Date,
    dailyValues: [Number], // Valores diarios originales sin escalar
    
    // Metadatos de Kunna (alias, fechas usadas...)
   
                        // El resultado (array de números)
});

module.exports = mongoose.model('Prediction', PredictionSchema);