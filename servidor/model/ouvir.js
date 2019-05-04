const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EscutaSchema = new Schema({
    id_esculta: {type: String , required: true},
    esculta: {type: String, required: true, unique: true, lowercase: true},
    descricao: {type: String }
});

module.exports = mongoose.model('esculta', EscutaSchema);