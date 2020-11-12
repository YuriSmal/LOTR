import {
    GET_POSTS_BY_ID_REQUEST,
    GET_POSTS_BY_ID_SUCCESS,
    GET_POSTS_BY_ID_FAIL
} from '../constants/constants';

import getBooksInfo from '../api/lotr'

// const getBook = (dispatch, url) => {
//     dispatch({ type: GET_POSTS_BY_ID_REQUEST });
//     fetch(url)
//         .then(res => res.json())
//         .then(res => {
//             if(res.error) {
//                 dispatch({ type: GET_POSTS_BY_ID_FAIL, payload: res.error });
//             }
//             dispatch({ type: GET_POSTS_BY_ID_SUCCESS, payload: res });
//         })
//         .catch(error => {
//             dispatch({ type: GET_POSTS_BY_ID_FAIL, payload: error });
//         })
// };

// export const getBookFunc = dispatch => {
//     return (url) => getBook(dispatch, url);
// }

const getBook = async dispatch => {
    dispatch({ type: GET_POSTS_BY_ID_REQUEST });

    try {
        const response = await getBooksInfo();
        const res = await response.json();
        dispatch({ type: GET_POSTS_BY_ID_SUCCESS, payload: res });
    }   catch (e) {
        dispatch({ type: GET_POSTS_BY_ID_FAIL, payload: e});
    }
};

export const getBookFunc = dispatch => {
    return() => getBook(dispatch);
}