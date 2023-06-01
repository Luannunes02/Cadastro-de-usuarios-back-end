const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({  // o modelo vai ficar aqui
    nome: { // vou ter um atributo nome 
        type: String, // aqui vou definir as propriedas do atributo
        required: true, // vai ser um campo obrigatório
        uppercase: true,  // grava em letras maiusculas
        minlength: 3,
        maxlength: 100
    },
    matricula: {
        type: Number,
        required: true,
        min: 1,
        max: 9999,
        unique: true  // atributo único/não deve ter outro igual, 'true'
    },
    ativo: {
        type: Boolean,
        default: true, // se eu inserir um usuario e colocar valor vai ser true
        required: true
    },
    endereco: {
        cidade: {
            type: String,
            require: true,
            minlength: 3,
            maxlength: 100
        },
        estado: {
            type: String,
            require: true,
            minlength: 2,
            maxlength: 2
        }
    },
    registro: {
        type: Date,
        default: Date.now
    }
});

UserSchema.plugin(mongoosePaginate) // adiciona o plugin do mongoose paginate para que funcione
mongoose.model('Usuario', UserSchema); // aqui digo o nome do esquema e onde ele está definido