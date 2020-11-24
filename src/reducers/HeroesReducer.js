import {
    GET_CHARACTERS_BY_ID_REQUEST,
    GET_CHARACTERS_BY_ID_SUCCESS,
    GET_CHARACTERS_BY_ID_FAIL,
    ADD_FILTER
} from '../constants/constants';

const initialState = {
    heroes: {
        isLoading: false,
        error: false,

        data: {docs: []},
        filteredHeroes: {docs: []}
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
                    filteredHeroes: action.payload
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
        case ADD_FILTER:
            return {
                ...state,
                heroes: {
                    isLoading: false,
                    error: false,
                    data: state.heroes.data,
                    filteredHeroes: action.payload
                }
            }
        default: return state;        
    }
}

export default HeroesReducer;