import React from 'react';
<<<<<<< HEAD
import ParticularBook from './ParticularBook/ParticularBook'

=======
>>>>>>> bcd0bcce39c2c6a79b1d8912ac4a2eab1263d5ab
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
                <input 
                    type='text' 
                    placeholder='search...' 
                    onChange={(e) => this.searchItem(e)} 
                />
                    {this.showBooks()}

                    </div>
            )
        
    }
            
}

export default Book;