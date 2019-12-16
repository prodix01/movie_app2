import React from "react";

function Coffee({ favorite, name }) {
    return (
        <div>
            <h1>I like {name}</h1>
            <img src = {favorite} />
        </div>
    );
}

export default Coffee;