const { Category } = require("../models");

exports.getAllCategories = (req, res) => {
  res.status(200).json({
    status: "success",
    data: [
      {
        id: "01",
        name: "Iphone",
      },
      {
        id: "02",
        name: "Android",
      },
      {
        id: "03",
        name: "MacOS",
      },
    ],
  });
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
