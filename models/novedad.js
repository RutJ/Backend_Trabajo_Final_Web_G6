const mongoose = require('mongoose');
const Usuario = require('./usuario');
const { Schema } = mongoose;

const NovedadSchema = new Schema({
    usuario: {type: String, required: true},
    texto: {type: Schema.Types.ObjectId, ref: Usuario},
    estado: {type: Boolean, required: true},//pendiente-procesado
})

module.exports = mongoose.model('Novedad', NovedadSchema);