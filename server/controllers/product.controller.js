const Products = require('../models/product.models');

const findByName = async (req, res) => {
  const name = req.params.name;
  try {
    const products = await Products.find({ name: { $regex: name, $options: 'i' } });
    if(products.length === 0)
    {
       res.status(404).json({error: "No results found!!"})
    }
    else{
    res.json(products);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const readById = async (req, res) => {
  try {
    const products = await Products.findById(req.params.id);
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: 'Product does not exist' });
  }
};


const readAll = async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const create = async (req, res) => {
  const products = new Products(req.body);
  try {
    const addProducts = await products.save();
    res.status(201).json(addProducts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeById = async (req, res) => {
  try {
    await Products.findByIdAndRemove(req.params.id);
    res.json({ message: 'Product removed' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const updateById = async (req, res) => {
  try {
    const update = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(update);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeAll = async (req, res) => {
  try {
    await Products.deleteMany({});
    res.json({ message: 'All Product removed' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {readAll, readById, create, updateById, removeById, removeAll, findByName };