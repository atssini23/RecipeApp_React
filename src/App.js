import React, { useEffect, useState } from "react";
import Recipe from "./Recipe.js";
import "./styles.css";

const App = () => {
  const APP_ID = "2e0759b9";
  const APP_KEY = "9184a0997c1629fa38c60b63ab042e78";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("drinks");

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Effect has been run");
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    //console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    //console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <header className="site-header">
        <div className="d-flex">
          <div className="mr-auto p-2">
            <h1 className="site-header--logo">Recipe App</h1>
          </div>
          <div className="p-2">
            <nav className="site-header--menu">
              <a href="#">Menu</a>
              <a href="#">Menu</a>
              <a href="#">Menu</a>
            </nav>
          </div>
        </div>
      </header>
      <div className="recipe-form">
        <form onSubmit={getSearch} className="search-form">
          <input
            className="recipe-form--input"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="recipe-form--submit" type="submit">
            Search
          </button>
        </form>
      </div>

      {recipes.map((recipe) => (
        <Recipe
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          key={recipe.recipe.label}
          calories={recipe.recipe.calories}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};
export default App;
