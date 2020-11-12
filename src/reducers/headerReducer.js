import {
    GET_POSTS_BY_ID_REQUEST,
    GET_POSTS_BY_ID_SUCCESS,
    GET_POSTS_BY_ID_FAIL
} from '../constants/constants'

const initialState = {
    books: {
        isLoading: null,
        error: null,
        data: null
    }
};

const headerReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POSTS_BY_ID_REQUEST:
            return {
                ...state,
                books: {
                    isLoading: true,
                    error: null,
                    data: null
                }
            }
        case GET_POSTS_BY_ID_SUCCESS:
            return {
                ...state,
                books: {
                    isLoading: false,
                    error: false,
                    data: action.payload
                }
            }
        case GET_POSTS_BY_ID_FAIL:
            return {
                ...state,
                books: {
                    isLoading: false,
                    error: action.payload,
                    data: false
                }
            }
        default: return state;        
    }
}

export default headerReducer;