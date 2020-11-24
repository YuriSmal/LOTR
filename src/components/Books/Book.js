import React from 'react';
import ParticularBook from './ParticularBook/ParticularBook'
import './books.css';

class Book extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: null
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
                                <h2>
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
                    <div className="search-filter-wrapper">
                    <input className="search-filter"
                        type='text' 
                        placeholder='Search by title...' 
                        onChange={(e) => this.searchItem(e)} 
                    />
                    </div>
                    <div className="book-wrapper">
                        {this.showBooks()}
                    </div>
                </div>
            )
        
    }
            
}

export default Book;