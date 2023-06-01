const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario') // digo que o modelo que vou usar no controller é o usuario

//agora posso começar a definir os modelos, insert, update, delete...
//tenho que exportar como modo para conseguir usar ele nas rotas para definir os caminhos a serem tomados

module.exports = { // exportando os metodos para que eu consiga usar no arquivo routes
    async insert (req, res) { // cria um novo objeto, metodo post
        // esse nome insert é um nome aleatório e didáta, é o nome do objeto que realiza o post, o create é o que faz o post
        const usuarios = await Usuario.create(req.body); // o corpo tem dados que quero inserir como documentos no db
        return res.json(usuarios)
    },
    async index (req,res) { // exibi todos os usuarios do banco de dados
        const { page } = req.query; // isso é passado junto ao metodo get
        // esse recurso page é do paginate, são do parametro get(por exemplo, quais paginas vamos querer ver, caso tenha muitos objetos)
        // "http://localhost:3201/sistema/usuarios?page=1": exibi os 5 primeiros registros da página 1, caso seja 2, mostra a segunda página
        const usuarios = await Usuario.paginate({}, {page, limit: 5});
        // "page": vai ser o valor da página, pode ser o valor default da página inicial, exemplo: http://localhost:3201/sistema/usuarios?page=1
        // "limit": qual a quantidade de dados que serão exibidos na página(vai exibir 5 registros a cada página)

        return res.json(usuarios);
    },
    async detail (req, res) { // esse metodo busca um usuario especifico
        const usuarios = await Usuario.findById(req.params.id); // procura de acordo com o id e mostra os detalhes

        return res.json(usuarios);
    },
    async update (req,res) {
        const usuarios = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true});
        // busca o registro com base no id, os dados que vão ser feitos updates são passados no corpo da requisição, via "put"
        // o "new=true" diz para atualizar o registro e guardar o registro atualizado na constante

        return res.json(usuarios);
    },
    async delete (req, res) {
        const usuarios = await Usuario.findByIdAndRemove(req.params.id);
        // busco o registro com base no ID e o remove ele da base de dados
        return res.send(); // manda com send somente a mensagem 200(sucessosS)
    }
}