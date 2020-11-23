import React from 'react';
import './books.css';

class Book extends React.Component {
    constructor(props) {
        super(props);

        this.showBooks = this.showBooks.bind(this)
    }

    componentDidMount()  {
        this.props.getBookInfo()
    }

    showBooks() {
        if(this.props.books.docs) {
            return(
                this.props.books.docs.map(item => {
                    return(
                        <div key={item._id} className="book">
                            <h2>{item.name}</h2>
                        </div>
                    )
                })
            )
        }
    }

    render() {
        
            return(
                <div className="book-wrapper">
                    {this.showBooks()}

                    </div>
            )
        
    }
            
}

export default Book;