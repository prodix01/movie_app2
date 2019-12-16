import React from "react";
import propTypes from "prop-types";

function Coffee({ favorite, name, rating }) {
    return (
        <div>
            <h1>I like {name}</h1>
            <h4>{rating} / 5.0</h4>
            <img src = {favorite} alt = {name} />
        </div>
    );
}


Coffee.propTypes = {
    name : propTypes.string.isRequired,
    favorite : propTypes.string.isRequired,
    rating : propTypes.number.isRequired
};

export default Coffee;