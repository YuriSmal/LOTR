import React from 'react';

import './Film.css';

class Film extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: null
        }
        this.showFilms = this.showFilms.bind(this);
    }

    componentDidMount()  {
        this.props.getFilmsInfo()
    }

    searchItem(e) {
        let keyword = e.target.value;
        this.setState({search:keyword})
    }

    handleScoreFilter(e) {
        let scoreType = e.target.value;
        if (e.target.checked) {
            this.props.score.addScoreFilter(scoreType);
        }
        else {
            this.props.score.removeScoreFilter(scoreType);
        }
    }

    showFilms() {
        if(this.props.films.docs) {
            return(
                this.props.films.docs.filter((data) => {
                    if (this.state.search == null)
                        return data
                    else if (data.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                        return data
                    }
                }).map(item => {
                    if(item.name !== "The Lord of the Rings Series" &&  item.name !== "The Hobbit Series") {
                        return(
                            <div key={item._id} className="film">
                                <div className="movie-img">
                                     <div className="movie-score"><p>{item.rottenTomatesScore}</p></div>
                                </div>
                                <div className="movie-info-wrapper">
                                    <a className='film-link'>
                                    <h2 className="movie-title">{item.name}</h2>
                                    </a>
                                    
                                    <div className="movie-budget"><p>Budget: ${item.budgetInMillions} MM</p></div>
                                    <div className="movie-revenue"><p>Revenue: ${item.boxOfficeRevenueInMillions} MM</p></div> 
                                </div>  
                            </div>
                        )
                    }   
                })
            )
        }
    }

    render() {
        
            return(
                <div className="film-wrapper">
                    <div className="search-filter-wrapper search-filter-films">
                    <input className="search-filter"
                        type='text' 
                        placeholder='Search by title...' 
                        onChange={(e) => this.searchItem(e)} 
                    />
                    </div>

                    <div className="film-wrapper">
                        {this.showFilms()}
                    </div>
                </div>
            )
        
    }
            
}

export default Film;