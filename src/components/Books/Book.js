import React from 'react';
import ParticularBook from './ParticularBook/ParticularBook'
import './books.css';

import book1 from './img/first_bookjpg.jpg'
import book2 from './img/second_book.jpg'
import book3 from './img/book_3.jpg'

class Book extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: null,
            book1 : <img className="book-img_img" src={book1}/>,
            book2 : <img className="book-img_img" src={book2}/>,
            book3 : <img className="book-img_img" src={book3}/>
        }
        this.showBooks = this.showBooks.bind(this)
        this.showParticularBook = this.showParticularBook.bind(this)
    }

    componentDidMount()  {
        this.props.getBookInfo()
    }

    showParticularBook() {
        return(
            <ParticularBook
                item = {this.props.books.docs}
             />
        )
    }

    searchItem(e) {
        let keyword = e.target.value;
        this.setState({search:keyword})
    }

    showBooks() {
        if(this.props.books.docs) {
            return(
                this.props.books.docs.filter((data) => {
                    if (this.state.search == null)
                        return data
                    else if (data.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                        return data
                    }
                }).map(item => {
                    return(
                        <div key={item._id} className="book">  
                         {item.name === "The Fellowship Of The Ring" && (<div >{this.state.book1}</div>)}
                        {item.name === "The Two Towers" && (<div >{this.state.book2}</div>)}
                        {item.name === "The Return Of The King" && (<div >{this.state.book3}</div>)}
                                <h2 className="book_title">
                                {item.name}
                                </h2>
                        </div>
                    )
                })
            )
        }
    }

    render() {
        
            return(
                <div className="book-wrapper">
                    {/* <div className="search-filter-wrapper">
                    <input className="search-filter"
                        type='text' 
                        placeholder='Search by title...' 
                        onChange={(e) => this.searchItem(e)} 
                    />
                    </div> */}
                    <div className="book-wrapper">
                        {this.showBooks()}
                    </div>
                </div>
            )
        
    }
            
}

export default Book;