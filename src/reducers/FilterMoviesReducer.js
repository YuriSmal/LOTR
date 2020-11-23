import {
    ADD_SCORE_FILTER,
    REMOVE_SCORE_FILTER
} from '../constants/constants'

const initialState = {
    scoreFilter: []
};

const FilterMoviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_SCORE_FILTER:
            return Object.assign({}, state, {
                scoreFilter: [...state.scoreFilter, action.scoreType]
            });
        case REMOVE_SCORE_FILTER:
            const newScoreFilter = state.scoreFilter.filter((item) => item!== action.scoreType)
            return {
                scoreFilter: newScoreFilter
            }
    }
}

export default FilterMoviesReducer;