import React from 'react';
import {Link} from 'react-router-dom';

const EachRecipe = (props) => {
    const {index,label,image} = props;
    return (
        <div key={index} className="recipe-item">
            <img src={image} alt={label} />
            <h3>{label.length>18?`${label.substring(0, 17)}...`:`${label}`}</h3>
            <Link to={`/RecipeDetail/${label}`} >
                <button className="btn">        
                    About
                </button>
            </Link>
        </div>
    );
};

export default EachRecipe;