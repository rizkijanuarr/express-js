const { Category } = require("../models");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();

    res.status(200).json({
      status: "Success!",
      data: categories,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      error: "Server Down",
    });
  }
};

exports.storeCategory = async (req, res) => {
  try {
    let { name, description } = req.body;

    const newCategory = await Category.create({
      name,
      description,
    });

    res.status(201).json({
      status: "Success!",
      data: newCategory,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Fail!",
      error: error.errors,
    });
  }
};

exports.detailCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({
        status: "Fail",
        error: "Data yang Anda cari tidak ditemukan!",
      });
    } else {
      return res.status(200).json({
        status: "Success!",
        data: category,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      error: "Server Down",
    });
  }
};
