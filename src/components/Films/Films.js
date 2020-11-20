import React from 'react';

import './Film.css';

class Film extends React.Component {
    constructor(props) {
        super(props);

        this.showFilms = this.showFilms.bind(this);
        // this.showMoreFilms = this.showMoreFilms.bind(this)
    }

    componentDidMount()  {
        this.props.getFilmsInfo()
    }

    showFilms() {
        if(this.props.films.docs) {
            return(
                this.props.films.docs.map(item => {
                    if(item.name != "The Lord of the Rings Series" &&  item.name != "The Hobbit Series") {
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
                    {this.showFilms()}
                    </div>
            )
        
    }
            
}

export default Film;