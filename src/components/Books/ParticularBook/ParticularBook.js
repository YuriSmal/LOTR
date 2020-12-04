import React from 'react';

function ParticulatBook(props) {
    const BookItem = props.item.map(item => {
        return(    
            <div>
            <p>The book is - {item.name}</p>
        </div>
        )
    })
    return(
        {BookItem}
    )
}

export default ParticulatBook;