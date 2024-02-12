const Knight = require('../utils/db').Knight;

const getAllKnights = async (req, res) => {
  try {
    const knights = await Knight.find();
    res.json(knights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getHeroKnights = async (req, res) => {
  try {
    const heroes = await Knight.find({ exp: { $gt: 0 } });
    res.json(heroes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createKnight = async (req, res, next) => {
  try {
    const { name, nickname, birthday, classe, weapons, attributes, keyAttribute } = req.body;
    const knight = new Knight({ name, nickname, birthday, classe, weapons, attributes, keyAttribute });
    await knight.save();
    res.status(201).json({ message: 'Knight created successfully', knight });
  } catch (error) {
    next(error);
  }
}

const getKnightById = async (req, res) => {
  try {
    const knight = await Knight.findById(req.params.id);
    if (!knight) {
      return res.status(404).json({ message: 'Knight not found' });
    }
    res.json(knight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateKnight = async (req, res) => {
  try {
    const updatedKnight = await Knight.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedKnight) {
      return res.status(404).json({ message: 'Knight not found' });
    }
    res.json(updatedKnight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteKnight = async (req, res) => {
  try {
    const deletedKnight = await Knight.findByIdAndDelete(req.params.id);
    if (!deletedKnight) {
      return res.status(404).json({ message: 'Knight not found' });
    }
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
