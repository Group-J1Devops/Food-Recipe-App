import React, { useState } from "react";
import "./CreateRecipe.scss";
import toast from "react-hot-toast";

const CreateRecipe = () => {
  const [recipeData, setRecipeData] = useState({
    name: "",
    description: "",
    instructions: "",
    cookingTime: "",
    ingredients: [""],
  });

  const [recipeImage, setRecipeImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({
      ...recipeData,
      [name]: value,
    });
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...recipeData.ingredients];
    newIngredients[index] = value;
    setRecipeData({ ...recipeData, ingredients: newIngredients });
  };

  const addIngredient = () => {
    setRecipeData({
      ...recipeData,
      ingredients: [...recipeData.ingredients, ""],
    });
  };

  const removeIngredient = (index) => {
    const newIngredients = [...recipeData.ingredients];
    newIngredients.splice(index, 1);
    setRecipeData({ ...recipeData, ingredients: newIngredients });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setRecipeImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipeData.name || !recipeData.description || !recipeData.instructions || !recipeData.cookingTime || !recipeImage || recipeData.ingredients.length === 0) {
      toast.error("All fields are required.");
      return;
    }
    // submit logic here
    toast.success("Recipe created successfully!");
  };

  console.log("CreateRecipe component mounted");


  return (
    <div className="create-recipe-container">
      <h2>Create a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Recipe Name"
          value={recipeData.name}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Short Description"
          value={recipeData.description}
          onChange={handleChange}
        />

        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
        />

        {preview && <img src={preview} alt="preview" className="preview-img" />}

        <textarea
          name="instructions"
          placeholder="Cooking Instructions"
          value={recipeData.instructions}
          onChange={handleChange}
        />

        <input
          type="text"
          name="cookingTime"
          placeholder="Cooking Time (e.g., 30 mins)"
          value={recipeData.cookingTime}
          onChange={handleChange}
        />

        <div className="ingredients">
          <label>Ingredients:</label>
          {recipeData.ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-input">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                placeholder={`Ingredient ${index + 1}`}
              />
              {index > 0 && (
                <button type="button" onClick={() => removeIngredient(index)}>Remove</button>
              )}
            </div>
          ))}
          <button type="button" className="add-btn" onClick={addIngredient}>
            + Add Ingredient
          </button>
        </div>

        <button type="submit" className="submit-btn">
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
