import React from 'react';
import { connect } from 'react-redux';
import { getFilmsFunc } from '../actions/Films';
import Films from '../components/Films/Films';
import { films } from '../reducers';

const FilmsContainer = ({ films, getFilmsInfo }) => (
    <Films
        films={films}
        getFilmsInfo={getFilmsInfo}
    />
)

const mapStateToProps = (state) => ({
    films: state.films.films.data
})

const mapDispatchToProps = dispatch => {
    return {
        getFilmsInfo: getFilmsFunc(dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmsContainer)