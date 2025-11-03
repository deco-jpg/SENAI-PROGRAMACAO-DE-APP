const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// 🔹 Conexão com o banco MySQL
const sequelize = new Sequelize('db_fullstack', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// 🔹 Modelo Usuario
const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    formaPagamento: {
        type: DataTypes.STRING
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// 🔹 Modelo Produto
const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lote: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    validade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// 🔹 Configuração do Express
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

// 🔹 Rotas
app.post('/usuarios', async (req, res) => {
    try {
        const { nome, email, telefone, formaPagamento, endereco } = req.body;
        const novoUsuario = await Usuario.create({ nome, email, telefone, formaPagamento, endereco });
        res.status(201).json(novoUsuario);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Erro ao criar usuário' });
    }
});

app.get('/usuarios', async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
});

app.post('/produtos', async (req, res) => {
    try {
        const { nome, lote, validade, categoria, quantidade } = req.body;
        const novoProduto = await Produto.create({ nome, lote, validade, categoria, quantidade });
        res.status(201).json(novoProduto);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Erro ao criar produto' });
    }
});

app.get('/produtos', async (req, res) => {
    const produtos = await Produto.findAll();
    res.json(produtos);
});

// 🔹 SINCRONIZAÇÃO E INICIALIZAÇÃO DO SERVIDOR
sequelize.sync({ alter: true })
    .then(() => {
        console.log('✅ Banco de dados sincronizado com sucesso.');
        app.listen(port, () => {
            console.log(`🚀 Servidor rodando em http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('❌ Erro ao sincronizar banco de dados:', err);
    });
