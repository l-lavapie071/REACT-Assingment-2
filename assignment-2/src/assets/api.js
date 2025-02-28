
export const fetchRecipes = async (ingredients, apiKey) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`);
    const data = await response.json();
    return data;
  };