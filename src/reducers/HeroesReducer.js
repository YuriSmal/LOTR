import { act } from 'react-dom/test-utils';
import {
    GET_CHARACTERS_BY_ID_REQUEST,
    GET_CHARACTERS_BY_ID_SUCCESS,
    GET_CHARACTERS_BY_ID_FAIL,
    ADD_FILTER,
    GET_PARTICULAR_CHARACTER_BY_ID_REQUEST,
    GET_PARTICULAR_CHARACTER_BY_ID_SUCCESS,
    GET_PARTICULAR_CHARACTER_BY_ID_FAIL,
    SET_PAGINATION
} from '../constants/constants';

const initialState = {
    heroes: {
        isLoading: false,
        error: false,
        data: {docs: []},
        filteredHeroes: {docs: []},
        currentPage: 0,
    },
    particularHero: {
        isLoading: false,
        error: false,
        data: false,
    }
};

const HeroesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CHARACTERS_BY_ID_REQUEST:
            return {
                ...state,
                heroes: {
                    ...state.heroes,
                    isLoading: true,
                    error: false,
                }
            }
        case GET_CHARACTERS_BY_ID_SUCCESS:
            return {
                ...state,
                heroes: {
                    isLoading: false,
                    error: false,
                    data: action.payload,
                    filteredHeroes: action.payload,
                    currentPage: state.heroes.currentPage
                },

            }
        case GET_CHARACTERS_BY_ID_FAIL:
            return {
                ...state,
                heroes: {
                    isLoading: false,
                    error: action.payload,
                    data: false
                },
            }
            case GET_PARTICULAR_CHARACTER_BY_ID_REQUEST:
            return {
                ...state,
                particularHero: {
                    isLoading: true,
                    error: false,
                    data: false,
                }
            }
        case GET_PARTICULAR_CHARACTER_BY_ID_SUCCESS:
            return {
                ...state,
                particularHero: {
                    isLoading: false,
                    error: false,
                    data: action.payload,
                }

            }
        case GET_PARTICULAR_CHARACTER_BY_ID_FAIL:
            return {
                ...state,
                particularHero: {
                    isLoading: false,
                    error: action.payload,
                    data: false,
                }
            }
        case ADD_FILTER:
            return {
                ...state,
                heroes: {
                    isLoading: false,
                    error: false,
                    data: state.heroes.data,
                    filteredHeroes: action.payload,
                    currentPage: state.heroes.currentPage
                }
            }
        case SET_PAGINATION:
            return {
                ...state,
                heroes: {
                    isLoading: false,
                    error: false,
                    data: state.heroes.data,
                    filteredHeroes: state.heroes.filteredHeroes,
                    currentPage: action.payload
                }
            }
        default: return state;        
    }
}

export default HeroesReducer;