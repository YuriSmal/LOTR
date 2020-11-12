import React from 'react';

function Header({ header, getBookInfo }) {
    console.log(header, getBookInfo);
    return (
        <div className="header">
            <button onClick={getBookInfo}>Show films</button>
        </div>
    );
}

export default Header;