import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="container">
      <div className="recipe-list--wrap">
        <div className={style.recipe}>
          <img className={style.image} src={image} alt="" />

          <h2 className="recipe-list--title">{title}</h2>

          <ol>
            {ingredients.map((ingredients) => (
              <li>{ingredients.text}</li>
            ))}
          </ol>
          <p>Calories: {calories}</p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
