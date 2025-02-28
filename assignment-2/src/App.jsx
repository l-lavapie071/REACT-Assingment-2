import { useState } from "react";
/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import Header from "./components/Header";
import SeachBox from "./components/SearchBox";
import DisplayRecipes from "./components/DisplayRecipes";

function App() {
  const [recipes, setRecipes] = useState([]);
  return (
    <>
      <Header />
      <SeachBox setRecipes={setRecipes} />
      <DisplayRecipes recipes={recipes} />
    </>
  );
}

export default App;
