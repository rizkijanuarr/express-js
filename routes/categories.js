const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  storeCategory,
  detailCategory,
} = require("../controllers/categoryController");

// GET ALL
router.get("/", getAllCategories);

// CREATE DATA
router.post("/", storeCategory);

// GET BY ID
router.get("/:id", detailCategory);

// /api/v1/categories/filterData
router.get("/filterData", (req, res) => {
  res.send("Route filter data");
});

// /api/v1/categories/:slug
router.get("/:slug", (req, res) => {
  res.send(`Ini route params ${req.params.slug}`);
});

module.exports = router;
