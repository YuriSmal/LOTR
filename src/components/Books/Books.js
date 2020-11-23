import React from 'react';
import './books.css';

function Books({ books, getBookInfo,getBookName }) {
    console.log(books, getBookInfo);
    return (
        <a  onClick={getBookInfo}>
            <div className="Books_button">
                <p>Books</p>

            </div>
        </a>
    );
}

export default Books;