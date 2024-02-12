// server.js
const express = require('express');
const { connect } = require('./utils/db');
const knightRoutes = require('./routes/KnightRoutes');
const cors = require('cors'); // Importando o pacote CORS

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

connect();

app.use(cors()); // Usando o CORS middleware para habilitar o CORS em todas as rotas
app.use(express.json());
app.use('/knights', knightRoutes);

app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor!');
});

// Verificar se há erro para rotas inexistentes
app.use((req, res, next) => {
  res.status(404).send('Desculpe, essa rota não existe.');
});

// Verificar se há erro global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado no servidor.');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor está executando na porta ${PORT}`);
});
