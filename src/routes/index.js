const express = require('express');
const animalRoutes = require('./animalRoutes');
const adotanteRoutes = require('./adotanteRoutes');
const abrigoRoutes = require('./abrigoRoutes');
const voluntarioRoutes = require('./voluntarioRoutes');
const eventoRoutes = require('./eventoRoutes');
const adocaoRoutes = require('./adocaoRoutes');
const router = express.Router();

// Definir todas as rotas
router.use('/animais', animalRoutes);
router.use('/adotantes', adotanteRoutes);
router.use('/abrigos', abrigoRoutes);
router.use('/voluntarios', voluntarioRoutes);
router.use('/evento', eventoRoutes);
router.use('/adocao', adocaoRoutes);

// Rota padrão para verificação da API
router.get('/', (req, res) => {
  res.json({
    message: 'Bem-vindo à API de Adoção de Animais',
    status: 'online',
    version: '1.0.0',
  });
});

module.exports = router;