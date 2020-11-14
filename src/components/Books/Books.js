import React from 'react';

function Books({ books, getBookInfo }) {
    console.log(books, getBookInfo);
    return (
        <div className="header">
            <button onClick={getBookInfo}>Show books</button>
        </div>
    );
}

export default Books;