import { useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import DisplayRecipes from "./components/DisplayRecipes";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [dietaryRestriction, setDietaryRestriction] = useState("");

  const filterRecipes = (recipes, restriction) => {
    if (!restriction) return recipes;
    return recipes.filter((recipe) =>
      recipe.diets.includes(restriction.toLowerCase())
    );
  };

  const filteredRecipes = filterRecipes(recipes, dietaryRestriction);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <SearchBox
              setRecipes={setRecipes}
              setDietaryRestriction={setDietaryRestriction}
            />
          </div>
          <div className="col-12">
            <DisplayRecipes recipes={filteredRecipes} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
