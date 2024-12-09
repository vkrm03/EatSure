import React from "react";

function Card({Src, Name, Ratings, Location}) {
    return (
        <div className="card-container">
            <div className="card">
                <img src={Src} alt="dining out" />
                <h2>{Name}</h2>
                <p>{Ratings}</p>
                <p>{Location}</p>
                <button>Visit</button>
            </div>
        </div>
    );
};

export default Card;