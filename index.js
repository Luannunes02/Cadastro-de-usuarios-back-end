const express = require(`express`);
const  mongoose = require(`mongoose`);
const requireDir = require(`require-dir`);
const cors = require(`cors`);

const app = express()

app.use(express.json());  // permite que use arquivos json no projeto
app.use(cors());  // isso e para seguranca ainda mais no chrome

mongoose.connect('mongodb://localhost:27017/curso', {useNewUrlParser: true});
// isso incia a conexão com o banco de dados, a porta 27017 é a padrão
requireDir('./src/models'); // aqui diz que todos os modelos estao na pasta models

app.use('/sistema', require('./src/routes/routes'));
// aqui diz o caminho do sistema

app.listen(3201)
// aqui diz a porta que estou utilizando
// para acessar no navegador acessar 'localhost:3001/sistema', o sistema é o "home", ai tem que colocar depois por exemplo 'usuarios'
