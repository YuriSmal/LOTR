import {
    GET_CHARACTERS_BY_ID_REQUEST,
    GET_CHARACTERS_BY_ID_SUCCESS,
    GET_CHARACTERS_BY_ID_FAIL,
    ADD_FILTER
} from '../constants/constants';

const getHeroes = (dispatch) => {
    dispatch({type: GET_CHARACTERS_BY_ID_REQUEST});
    fetch(`https://the-one-api.dev/v2/character?`,{
        headers: {
            'Authorization': 'Bearer TNdpyFs14J2bWMz53NFH'
        }
    })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                dispatch({type: GET_CHARACTERS_BY_ID_FAIL, payload: res.error});
            }
            dispatch({type: GET_CHARACTERS_BY_ID_SUCCESS, payload: res});
         })
         .catch(error => {
             dispatch({type: GET_CHARACTERS_BY_ID_FAIL, payload: error});
         })
         
};

export const getHeroesFunc = dispatch => {
    return() => getHeroes(dispatch);
}

export const filterHeroes = (filters) => {
    return function(dispatch, getState) {
        let filteredHeroes = {...getState().characters.heroes.data};
        if (Object.keys(filters).length) {
            filteredHeroes.docs = filteredHeroes.docs.filter(item => {
                let isValid = true;
                for( let key in filters) {
                    if(item[key] !== filters[key]) {
                        isValid = false;
                        break
                    }
                }
                return isValid;
            });
        }
        dispatch({type: ADD_FILTER, payload: filteredHeroes})
    }
}
