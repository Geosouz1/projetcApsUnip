const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const FalaSchema = new Schema({
    id_fala:{type: String, required: true},
     fala:{type: String, required: true},
    descricao: {type: String}
});


module.exports = mongoose.model('fala',FalaSchema);