const KnightScheema = require('../models/KnightScheema');

// Exibe a lista com todos os knights. 

const getAllKnights = async (req, res) => {
  try {
    const knights = await KnightScheema.find();
    res.json(knights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Exibe uma lista contendo apenas os guerreiros que se tornaram heróis.

const getHeroKnights = async (req, res) => {
  try {
    const heroes = await KnightScheema.find({ exp: { $gt: 0 } }); // apenas se knight tiver experiência maior que 0
    res.json(heroes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cria um knight. 

const createKnight = async (req, res) => {
  const knight = new Knight({
    name: req.body.name,
    nickname: req.body.nickname,
    birthday: req.body.birthday,
    class: req.body.class,
    weapons: req.body.weapons,
    attributes: req.body.attributes,
    keyAttribute: req.body.keyAttribute,
    exp: req.body.exp
  });

  try {
    const newKnight = await knight.save();
    res.status(201).json(newKnight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//Mostra informações de um knight.

const getKnightById = async (req, res) => {
  try {
    const knight = await KnightScheema.findById(req.params.id);
    if (!knight) {
      return res.status(404).json({ message: 'Knight not found' });
    }
    res.json(knight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Permite alterar o apelido.

const updateKnight = async (req, res) => {
  try {
    const updatedKnight = await KnightScheema.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedKnight) {
      return res.status(404).json({ message: 'Knight not found' });
    }
    res.json(updatedKnight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Remove um guerreiro. Esse guerreiro vai entrar no Hall of Heroes.

const deleteKnight = async (req, res) => {
  try {
    const deletedKnight = await KnightScheema.findByIdAndDelete(req.params.id);
    if (!deletedKnight) {
      return res.status(404).json({ message: 'Knight not found' });
    }
    // Adicionar o guerreiro ao Hall of Heroes aqui, se necessário
    res.json({ message: 'Knight deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllKnights,
  getHeroKnights,
  createKnight,
  getKnightById,
  updateKnight,
  deleteKnight
};
