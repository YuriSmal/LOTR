import React from 'react';
import './Film.css'

function Films({ films, getFilmsInfo }) {
    console.log(films, getFilmsInfo);
    return (
        <a  onClick={getFilmsInfo}>
            <div className="Films_button">
                <p>Films</p>
            </div>
        </a>
    );
}

export default Films;