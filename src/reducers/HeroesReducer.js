import {
    GET_CHARACTERS_BY_ID_REQUEST,
    GET_CHARACTERS_BY_ID_SUCCESS,
    GET_CHARACTERS_BY_ID_FAIL
} from '../constants/constants';

const initialState = {
    heroes: {
        isLoading: false,
        error: false,
        data: []
    },

};

const HeroesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CHARACTERS_BY_ID_REQUEST:
            return {
                ...state,
                heroes: {
                    isLoading: true,
                    error: false,
                    data: false
                },
 
            }
        case GET_CHARACTERS_BY_ID_SUCCESS:
            return {
                ...state,
                heroes: {
                    isLoading: false,
                    error: false,
                    data: action.payload
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
        default: return state;        
    }
}

export default HeroesReducer;