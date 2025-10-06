
const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

//Criando conexão com banco de dados MySQL
const sequelize = new Sequelize('db_fullstack', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

//Definindo moledo para tabela do banco de dados.
const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }

});

const app = express();
app.use(cors()); //Habilita CORS para todas as rotas
app.use(express.json()); //Habilita o parse de JSON no corpo das requisições

const port = 3000; //Porta onde o servidor irá rodar

//rota teste
app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

//rota para criar um novo usuário
app.post('/usuarios', async (req, res) => {
    try {
        const { nome, email } = req.body;
        const novoUsuario = await Usuario.create({ nome, email });
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ mensagem: "Verifique se o email já existe." });
    }
});

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`🚀Servidor rodando em http://localhost:${port}`);
        console.log('🚀Sincronizado com o banco de dados.');
    });
}).catch((error) => {
    console.error('😒Erro ao sincronizar com o banco de dados:');
});
