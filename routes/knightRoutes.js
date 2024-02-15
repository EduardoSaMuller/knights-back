const express = require('express');
const router = express.Router();
const knightController = require('../controllers/knightController');

// Rota para listar todos os knights
router.get('/', knightController.getAllKnights);

// Rota para filtrar apenas os guerreiros que se tornaram heróis
router.get('/heroes', knightController.getHeroKnights);

// Rota para criar um novo knight
router.post('/', knightController.createKnight);
// Rota enviar um knight para herói
router.post('/heroes', knightController.addKnightToHeroes);
// Rota para obter informações de um knight específico
router.get('/:id', knightController.getKnightById);

// Rota para atualizar informações de um knight específico
router.put('/:id', knightController.updateKnight);

// Rota para remover um knight específico
router.delete('/:id', knightController.deleteKnight);

router.delete('/heroes/:id', knightController.deleteKnightHero);


module.exports = router;
