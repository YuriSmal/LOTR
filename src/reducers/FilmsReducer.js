import {
    GET_MOVIES_BY_ID_REQUEST,
    GET_MOVIES_BY_ID_SUCCESS,
    GET_MOVIES_BY_ID_FAIL
} from '../constants/constants';

const initialState = {
    films: {
        isLoading: false,
        error: false,
        data: []
    }
};

const FilmsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_MOVIES_BY_ID_REQUEST:
            return {
                ...state,
                films: {
                    isLoading: true,
                    error: false,
                    data: false
                }
            }
        case GET_MOVIES_BY_ID_SUCCESS:
            return {
                ...state,
                films: {
                    isLoading: false,
                    error: false,
                    data: action.payload
                },
            }
        case GET_MOVIES_BY_ID_FAIL:
            return {
                ...state,
                films: {
                    isLoading: false,
                    error: action.payload,
                    data: false
                }
            }
        default: return state;        
    }
}

export default FilmsReducer;