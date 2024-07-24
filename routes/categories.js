const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  storeCategory,
  detailCategory,
  updateCategory,
} = require("../controllers/categoryController");

// GET ALL
router.get("/", getAllCategories);

// CREATE DATA
router.post("/", storeCategory);

// GET BY ID
router.get("/:id", detailCategory);

// UPDATE DATA
router.put("/:id", updateCategory);

module.exports = router;
