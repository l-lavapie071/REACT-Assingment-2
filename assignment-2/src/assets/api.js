
export const fetchRecipes = async (ingredients, apiKey) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}&number=30`);
  const data = await response.json();
  return data;
};

export const fetchRecipeInforBulk = async (ingredientsIDs, apiKey) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/informationBulk?ids=${ingredientsIDs}&apiKey=${apiKey}`);
  const data = await response.json();
  return data;
};