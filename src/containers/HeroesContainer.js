import React from 'react';
import { connect } from 'react-redux';
import { getHeroesFunc } from '../actions/Heroes';
import Heroes from '../components/Heroes/Heroes';
import { heroes } from '../reducers/HeroesReducer';

const HeroesContainer = ({ heroes, getHeroesInfo }) => (
    <Heroes
        heroes={heroes}
        getHeroesInfo={getHeroesInfo}
    />
)

const mapStateToProps = (state) => ({
    heroes: state.characters.heroes.data,
})

const mapDispatchToProps = dispatch => {
    return {
        getHeroesInfo: getHeroesFunc(dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeroesContainer)