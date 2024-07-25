const { where } = require("sequelize");
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
      error: error.errors.map((err) => err.message),
    });
  }
};

exports.storeCategory = async (req, res) => {
  try {
    const newCategory = await Category.create({
      name: req.body.name,
      description: req.body.description,
    });

    res.status(201).json({
      status: "Success!",
      data: newCategory,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Fail!",
      error: error.errors.map((err) => err.message),
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
        error: ["Data yang Anda cari tidak ditemukan!"],
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
      error: error.errors.map((err) => err.message),
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    await Category.update(req.body, {
      where: {
        id: id,
      },
    });

    const newCategory = await Category.findByPk(id);
    if (!newCategory) {
      return res.status(404).json({
        status: "Fail",
        error: ["Data tidak ditemukan!"],
      });
    } else {
      res.status(200).json({
        status: "Success",
        data: newCategory,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      error: error.errors.map((err) => err.message),
    });
  }
};

exports.destroyCategory = async (req, res) => {
  try {
    const id = req.params.id;
    await Category.destroy({
      where: {
        id: id,
      },
    });

    const destroyCategory = await Category.findByPk(id);
    if (destroyCategory === 0) {
      return res.status(404).json({
        status: "Fail",
        error: ["Data tidak ditemukan!"],
      });
    } else {
      return res.status(200).json({
        status: "Success!",
        message: `Data dengan id ${id} berhasil dihapus!`,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      error: error.errors.map((err) => err.message),
    });
  }
};
