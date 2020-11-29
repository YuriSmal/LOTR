import React from 'react';
import { connect } from 'react-redux';
import { getHeroesFunc, filterHeroes, getParticularHeroFunc } from '../actions/Heroes';
import Heroes from '../components/Heroes/Heroes';

const HeroesContainer = ({ heroes, getHeroesInfo, handleChange, filteredHeroes, getParticularHeroInfo, currentPage }) => (
    <Heroes
        heroes={heroes}
        getHeroesInfo={getHeroesInfo}
        handleChange={handleChange}
        filteredHeroes={filteredHeroes}
        getParticularHeroInfo={getParticularHeroInfo}
        currentPage={currentPage}
    />
)

const mapStateToProps = (state) => ({

    filteredHeroes: state.characters.heroes.filteredHeroes.docs,
    heroes: state.characters.heroes.data.docs,
    currentPage: state.characters.heroes.currentPage
})

const mapDispatchToProps = dispatch => {
    return {
        getHeroesInfo: getHeroesFunc(dispatch),
        handleChange: (race) => dispatch(filterHeroes(race)),
        getParticularHeroInfo: getParticularHeroFunc(dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeroesContainer)