import React from 'react';
import { Link, Route, Switch} from 'react-router-dom';
import ParticularHero from './ParticularHero';
import Pagination from './Pagination';
import './Heroes.css';
import human from '../../images/heroes-icons/humans.png';
import elf from '../../images/heroes-icons/elf.png';
import dwarf from '../../images/heroes-icons/dwarf.jpg';
import hobbit from '../../images/heroes-icons/hobbit.png';
import orc from '../../images/heroes-icons/orc.png';

class Heroes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: null,
            races: [],
            activeFilters: {},
        }

        this.showHeroes = this.showHeroes.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getUniqueValues = this.getUniqueValues.bind(this);
    }
    
    componentDidMount()  {
        this.props.getHeroesInfo();
    }

    handleChange(filter, value) {
        const newState = {...this.state};
        if(value === "all") {
            delete newState.activeFilters[filter];
        }
        else {
            newState.activeFilters = {...this.state.activeFilters, [filter]: value};
        }
        this.setState(newState, () => {
            this.props.handleChange(this.state.activeFilters);
        }); 
    }

    searchItem(e) {
        let keyword = e.target.value;
        this.setState({search:keyword})
    }

    getUniqueValues(arr, key) {
        const uniqueValues = [];
        arr.forEach((value) => {
           let isUnique = true; 
           uniqueValues.forEach((item) => {
               if(!item || !value[key] || !item.length || !value[key].length || value[key] === "NaN" || item.toLowerCase() === value[key].toLowerCase()) {
                   isUnique = false;
               }
           })
           if(isUnique) {
               uniqueValues.push(value[key]);
           }
        })
        return uniqueValues
    }

    showHeroes() {
        const heroesOnPage = this.props.filteredHeroes.slice(this.props.currentPage * 25,
        this.props.currentPage * 25 + 25);
        
        if(this.props.filteredHeroes) {
            const uniqueGender = this.getUniqueValues(this.props.heroes, "gender");
            const uniqueRace = this.getUniqueValues(this.props.heroes, "race"); 
            return(
            <div className="heroes_Conatiner">
                <div className="heroes-filter-wrapper">
                    <div className="heroes-filter">
                        <select
                            id="race"
                            name="race"
                            value={this.state.activeFilters.race}
                            onChange={(e) => {this.handleChange("race", e.target.value)}}
                        >
                            <option value='all'>Filter by race</option>
                            {uniqueRace.map((race) => <option key={race}>{race}</option>)}
                        </select>

                        <select
                            id="race"
                            name="race"
                            value={this.state.activeFilters.gender}
                            onChange={(e) => {this.handleChange("gender", e.target.value)}}
                        >
                            <option value='all'>Filter by gender</option>
                            {uniqueGender.map((gender) => <option key={gender}>{gender}</option>)}
                        </select>
                        <div className=" search-filter-heroes">
                            <input className="search-filter"
                                type='text' 
                                placeholder='Search by title...' 
                                onChange={(e) => this.searchItem(e)} 
                            />
                        </div>
                    </div>
                    
                </div>
                <p className="heroes_kostyl">qqqqqqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqq qqqqqqqqqq</p>
                <div className="heroes_wrapper">
                {heroesOnPage.filter((data) => {
                        if (this.state.search == null)
                            return data
                        else if (data.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                            return data
                        }
                    }).map(item => {
                        return(
                            <Link  to={`/characters/${item._id}`} key={item._id} >
                             <div className ="heroes_box" >
                                {(item.race === "Human" || item.race === "Men" || item.race === "Men,Wraith") && (<div><img className ="heroes_img" src ={human}/></div>)}
                                {(item.race === "Elf" || item.race === "Elves") && (<div><img className ="heroes_img" src ={elf}/></div>)}
                                {(item.race === "Dwarf" || item.race === "Dwarves") && (<div><img className ="heroes_img" src ={dwarf}/></div>)}
                                {(item.race === "Hobbit" || item.race === "Hobbits") && (<div><img className ="heroes_img" src ={hobbit}/></div>)}
                                {(item.race === "Orcs" || item.race === "Orc" || item.race === "Uruk-hai" || item.race === "Uruk-hai,Orc") && (<div><img className ="heroes_img" src ={orc}/></div>)}
                                <h2 className ="heroes_name">{item.name}</h2>
                                <p className ="heroes_race">{item.race}</p>
                                <p className ="heroes_gender">{item.gender}</p>
                            </div>
                            </Link>
                        )
                    })}
                    </div>
                   <div> <Pagination /></div>
            </div>
            )
        }
    }

    render() {
            return(
                <Switch>
                    <Route exact path="/characters">
                    <div className="book-wrapper">    
                        <div className="book-wrapper">
                            {this.props.heroes.length ? this.showHeroes() : <h2 className="heroes-preloader">Loading...</h2>}
                        </div>
                    </div>
                    </Route>
                
                    <Route
                        path="/characters/:id"
                        render={(props) => (
                            <ParticularHero
                            {...props}
                            getParticularHeroInfo={this.props.getParticularHeroInfo}
                            heroes={this.props.filteredHeroes}
                            />
                        )}
                    />
                </Switch>
            )

    }
            
}

export default Heroes;