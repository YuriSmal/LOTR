import { render } from '@testing-library/react';
import React from 'react';
import Pagination from "react-js-pagination";
import { Link, Route, Switch } from 'react-router-dom';
import ParticularHero from './ParticularHero'

import './Heroes.css'

class Heroes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
          };
        this.showHeroes = this.showHeroes.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }
    componentDidMount()  {
        this.props.getHeroesInfo()
    }

    showHeroes() {
        if(this.props.heroes.docs) {
            return(
            <div className="heroes_Conatiner" >{
                this.props.heroes.docs.map(item => {
                    return(
                        <div className ="heroes_box"key={item._id} >
                            <h2 className ="heroes_name">{item.name}</h2>
                            <p className ="heroes_race">{item.race}</p>
                            <Link to={`/characters/${item._id}`} id={item._id}>
                                See more
                            </Link>
                        </div>
                    )
                })
                }
                    <div>
                    <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={20}
                                totalItemsCount={993}
                                pageRangeDisplayed={5}
                                onChange={this.handlePageChange.bind(this)}
                            />
                    </div>
                </div>
                
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