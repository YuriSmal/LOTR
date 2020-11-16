import React from 'react';
import './Heroes.css'

function Heroes({ heroes, getHeroesInfo }) {
    console.log(heroes, getHeroesInfo);
    return (
        <a  onClick={getHeroesInfo}>
            <div className="Heroes_button">
                <p>Heroes</p>
            </div>
        </a>
    );
}

export default Heroes;