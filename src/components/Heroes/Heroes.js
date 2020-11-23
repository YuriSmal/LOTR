import { render } from '@testing-library/react';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ParticularHero from './ParticularHero'

import './Heroes.css'

class Heroes extends React.Component {
    constructor(props) {
        super(props);

        this.showHeroes = this.showHeroes.bind(this)
    }

    componentDidMount()  {
        this.props.getHeroesInfo()
    }

    showHeroes() {
        if(this.props.heroes.docs) {
            return(
            <div className="heroes_Conatiner">{
                this.props.heroes.docs.map(item => {
                    return(
                        <div className ="heroes_box" key={item._id} >
                            <h2 className ="heroes_name">{item.name}</h2>
                            <p className ="heroes_race">{item.race}</p>
                            <Link to={`/characters/${item._id}`} id={item._id}>
                                See more
                            </Link>
                        </div>
                    )
                })
                }</div>
                
                
            )
        }
    }

    render() {
        
            return(
                <div>
                    {this.showHeroes()}
                </div>
            )
        
    }
            
}

export default Heroes;