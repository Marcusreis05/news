const mongoose = require('../../config/mongo');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
  nome: String,
  email: String,
  senha: String,
},
{
    timestamps: true,
});

const UsuarioModel = mongoose.model('usuarios', usuarioSchema);

module.exports = UsuarioModel;