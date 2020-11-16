import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';
import FilmsReducer from './FilmsReducer';


export default combineReducers({
    books: BooksReducer,
    films:FilmsReducer
})