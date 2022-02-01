const mongoose = require('mongoose');
const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: String
});

let miUsuario = mongoose.model('Usuario', usuarioSchema);

module.exports = miUsuario;