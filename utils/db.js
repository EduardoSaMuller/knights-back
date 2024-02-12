require('dotenv').config();
const mongoose = require('mongoose');
const knightSchema = require('../models/knightSchema');

// Defina a URI de conexão com o banco de dados MongoDB Atlas
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.BASE_URL}`;

const Knight = mongoose.model('Knight', knightSchema);

async function connect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexão com o banco de dados MongoDB Atlas bem-sucedida!');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
}

function getClient() {
    return mongoose.connection;
}

module.exports = { connect, getClient, Knight };
