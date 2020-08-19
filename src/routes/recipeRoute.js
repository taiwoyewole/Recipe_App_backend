const express = require('express')
const recipeController = require('../controllers/recipeController')

const router = express.Router();


/**
 * 
GET  /api/recipes  — returns all recipes in database
GET  /api/recipes/:id  — returns the recipe with the provided ID from the database
POST  /api/recipes  — adds a new recipe to the database
PUT  /api/recipes/:id  — modifies the recipe with the provided ID
DELETE  /api/recipes/:id  — deletes the recipe with the provided ID

//USE THIS ID TO TEST THE ENDPOINTS
    5db05cddcc76402410ea64e7


 */


router
.route('/recipes')
.get(recipeController.getAllRecipes)
.post(recipeController.createRecipe);



router
.route('/recipes/:id')
.get( recipeController.getOneRecipe)
.patch( recipeController.updateRecipe)
.delete(recipeController.deleteRecipe );






module.exports = router;








