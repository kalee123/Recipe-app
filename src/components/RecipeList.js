import React from 'react';
import EachRecipe from './EachRecipe';

const RecipeList = (props) => {

    return (
        <div className="recipe-container">
            {
                props.recipes.map((item,index)=>{
                    const {label}=item.recipe;
                    const {image}=item.recipe;
                    return <EachRecipe key={index} image={image} label={label} />;
                    
                })
            }
        </div>
    );
};

export default RecipeList;