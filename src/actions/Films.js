import {
    GET_POSTS_BY_ID_REQUEST,
    GET_POSTS_BY_ID_SUCCESS,
    GET_POSTS_BY_ID_FAIL
} from '../constants/constants';

const getFilms = (dispatch) => {
    dispatch({type: GET_POSTS_BY_ID_REQUEST});
    fetch('https://the-one-api.dev/v2/movie',{
        headers: {
            'Authorization': 'Bearer TNdpyFs14J2bWMz53NFH'
        }
    })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                dispatch({type: GET_POSTS_BY_ID_FAIL, payload: res.error});
            }
            dispatch({type: GET_POSTS_BY_ID_SUCCESS, payload: res});
         })
         .catch(error => {
             dispatch({type: GET_POSTS_BY_ID_FAIL, payload: error});
         })
         
};

export const getFilmsFunc = dispatch => {
    return() => getFilms(dispatch);
}