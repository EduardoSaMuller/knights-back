const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const knightRoutes = require('./routes/knightRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Conecção ao banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/knights', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Configurar as rotas dos knights
app.use(knightRoutes);

// Rota de fallback para lidar com rotas não encontradas pela requisição
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Lidar com erros internos do servidor
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
