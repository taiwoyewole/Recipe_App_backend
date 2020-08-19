const recipeModel = require("../models/recipeModel");

/**
 * 
GET  /api/recipes  — returns all recipes in database
GET  /api/recipes/:id  — returns the recipe with the provided ID from the database
POST  /api/recipes  — adds a new recipe to the database
PUT  /api/recipes/:id  — modifies the recipe with the provided ID
DELETE  /api/recipes/:id  — deletes the recipe with the provided ID
 */

exports.createRecipe = async (req, res) => {
  try {
    const recipe = await recipeModel.create(req.body);

    res.status(201).json({
      status: "succss",
      data: recipe,
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

exports.getAllRecipes = async (req, res) => {
  try {
    const recipe = await recipeModel.find();

    res.status(201).json({
      status: "succss",
      data: recipe,
    });
  } catch (error) {
    res.status(400).json({
      error: "There is no recipe found with that ID",
    });
  }
};

exports.getOneRecipe = async (req, res) => {
  try {
    const recipe = await recipeModel.findById(req.params.id);

    res.status(201).json({
      status: "succss",
      data: recipe,
    });
  } catch (error) {
    res.status(400).json({
      error: "There is no recipe found with that ID",
    });
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await recipeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(201).json({
      status: "succss",
      data: recipe,
    });
  } catch (error) {
    res.status(400).json({
      error: "There is no recipe found with that ID",
    });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    await recipeModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "Deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      error: "There is no recipe found with that ID",
    });
  }
};
