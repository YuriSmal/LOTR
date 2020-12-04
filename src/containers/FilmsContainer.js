import React from 'react';
import { connect } from 'react-redux';
import { getFilmsFunc } from '../actions/Films';
import Films from '../components/Films/Films';

const FilmsContainer = ({ films, getFilmsInfo, search,}) => (
    <Films
        films={films}
        getFilmsInfo={getFilmsInfo}
        search={search}
    />
)

const mapStateToProps = (state) => ({
    films: state.films.films.data,
    search: state.films.films.search,
})

const mapDispatchToProps = dispatch => {
    return {
        getFilmsInfo: getFilmsFunc(dispatch),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmsContainer)