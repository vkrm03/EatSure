import React from "react";

function Card({Src, Name, Ratings, Locations}) {
    return (
        <div className="card-container">
            <div className="card">
                <img src={Src} alt="Night Life" />
                <h2>{Name}</h2>
                <p>{Ratings}</p>
                <p>{Locations}</p>
                <button>Visit</button>
            </div>
        </div>
    );
};

export default Card;