import React from 'react'
import { connect } from 'react-redux'
import { getBookFunc } from '../actions/books'
import Books from '../components/Books/Books'
import { books } from '../reducers'

const BooksContainer = ({ books, getBookInfo }) => (
    <Books
        books={books}
        getBookInfo={getBookInfo}
    />
)

const mapStateToProps = (state) => ({
    books: state.books.books.data
})

const mapDispatchToProps = dispatch => {
    return {
        getBookInfo: getBookFunc(dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksContainer)