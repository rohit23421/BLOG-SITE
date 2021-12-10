const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const category = require("../models/Category");
const Category = require("../models/Category");

//create categories
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get categories
router.get("/", async (req, res) => {
  try {
    const Cats = await Category.find();
    res.status(200).json(Cats);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
