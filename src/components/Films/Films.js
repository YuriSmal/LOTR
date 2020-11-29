import React from 'react';
import './Film.css';

import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/H1.jpg'
import img5 from './img/H2.jpg'
import img6 from './img/h3.jpeg'

class Film extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: null,
            img:  <img className="movie-img_img" src={img1}/>,
            img2:  <img className="movie-img_img" src={img2}/>,
            img3:  <img className="movie-img_img" src={img3}/>,
            img4:  <img className="movie-img_img" src={img4}/>,
            img5:  <img className="movie-img_img" src={img5}/>,
            img6:  <img className="movie-img_img" src={img6}/>,
        }
        this.showFilms = this.showFilms.bind(this);
        this.imgFilm = this.imgFilm.bind(this);
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

    imgFilm(item){
        if (item.name == "The Return of the King"){
            this.setState({img:<img className="movie-img_img" src={img2}/>})
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
                                {item.name === "The Fellowship of the Ring" && (<div >{this.state.img}</div>)}
                                {item.name === "The Two Towers" && (<div >{this.state.img2}</div>)}
                                {item.name === "The Return of the King" && (<div >{this.state.img3}</div>)}
                                {item.name === "The Unexpected Journey" && (<div >{this.state.img4}</div>)}
                                {item.name === "The Desolation of Smaug" && (<div >{this.state.img5}</div>)}
                                {item.name === "The Battle of the Five Armies" && (<div >{this.state.img6}</div>)}
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
                <div className="film-Container">
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