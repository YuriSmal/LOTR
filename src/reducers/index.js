import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';
import FilmsReducer from './FilmsReducer';
import HeroesReducer from './HeroesReducer';
// import FilterMoviesReducer from './FilterMoviesReducer';


export default combineReducers({
    books: BooksReducer,
    films: FilmsReducer,
    characters: HeroesReducer,
    // FilterMoviesReducer
})