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

import {getOneCharacter} from '../api/lotr';

const getHeroes = (dispatch) => {
    dispatch({type: GET_CHARACTERS_BY_ID_REQUEST});
    fetch(`https://the-one-api.dev/v2/character`,{
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

const getParticularHero = (dispatch, id) => {
    dispatch({type: GET_PARTICULAR_CHARACTER_BY_ID_REQUEST});
    getOneCharacter(id)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                dispatch({type: GET_PARTICULAR_CHARACTER_BY_ID_FAIL, payload: res.error});
            }
            dispatch({type: GET_PARTICULAR_CHARACTER_BY_ID_SUCCESS, payload: res});
         })
         .catch(error => {
             dispatch({type: GET_PARTICULAR_CHARACTER_BY_ID_FAIL, payload: error});
         })
         
}

export const getHeroesFunc = dispatch => {
    return() => getHeroes(dispatch);
}

export const getParticularHeroFunc = dispatch => {
    return(id) => getParticularHero(dispatch, id);
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

const setCurrentPage = (dispatch, page) => {
    dispatch({type: SET_PAGINATION,  payload: page})
}

export const setCurrentPageFunc = (dispatch) => {
    return(page) => setCurrentPage(dispatch, page); 
}