const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  storeCategory,
} = require("../controllers/categoryController");

// /api/v1/categories/
router.get("/", getAllCategories);

// /api/v1/categories/
router.post("/", storeCategory);

// /api/v1/categories/filterData
router.get("/filterData", (req, res) => {
  res.send("Route filter data");
});

// /api/v1/categories/:slug
router.get("/:slug", (req, res) => {
  res.send(`Ini route params ${req.params.slug}`);
});

module.exports = router;
