const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EscutaSchema = new Schema({
    id_esculta: {type: Number , required: true},
    esculta: {type: String, required: true, unique: true, lowercase: true},
    animacao: {type: Number }
});

module.exports = mongoose.model('esculta', EscutaSchema);