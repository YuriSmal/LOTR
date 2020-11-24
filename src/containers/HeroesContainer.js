import React from 'react';
import { connect } from 'react-redux';
import { getHeroesFunc, filterHeroes } from '../actions/Heroes';
import Heroes from '../components/Heroes/Heroes';

const HeroesContainer = ({ heroes, getHeroesInfo, handleChange, filteredHeroes }) => (
    <Heroes
        heroes={heroes}
        getHeroesInfo={getHeroesInfo}
        handleChange={handleChange}
        filteredHeroes={filteredHeroes}
    />
)

const mapStateToProps = (state) => ({
    filteredHeroes: state.characters.heroes.filteredHeroes.docs,
    heroes: state.characters.heroes.data.docs
})

const mapDispatchToProps = dispatch => {
    return {
        getHeroesInfo: getHeroesFunc(dispatch),
        handleChange: (race) => dispatch(filterHeroes(race))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeroesContainer)