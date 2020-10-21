import React from 'react';
import {Link,useParams} from 'react-router-dom';

function RecipeDetail() {
      let temmpRecipe = JSON.parse(localStorage.getItem('recipes'));
      let { id } = useParams();
      let currentRecipe = temmpRecipe.filter(item =>{
          console.log(item.recipe.label);
            return item.recipe.label === id 
      });
      let {label,image,ingredientLines} = currentRecipe[0].recipe;
      console.log(`label=${label},image=${image},lines=${ingredientLines}`);
        return (
        <>
        <div className="recipe-Container">
            <div className="img-container">
                <img src={image} alt="food" />
            </div>
            <div className="recipe-details">
                <h1>{label}</h1>
                <ol>
                    {ingredientLines.map((item,index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ol>
            </div>
            <Link to="/">
                <div className="home-Link">
                    Home
                </div>
            </Link>
        </div>
        </>
    );

}

export default RecipeDetail;