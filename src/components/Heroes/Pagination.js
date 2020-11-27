import React from 'react';
import { connect } from 'react-redux';
import './Pagination.css';
import {setCurrentPageFunc} from '../../actions/Heroes';

class Pagination extends React.Component {
    constructor(props) {
    super(props);
    this.heroesPerPage = 25;
    this.state = {
        currentPage: 0
    }
  }
  
  render() {
    const totalPages = new Array(Math.ceil(this.props.heroesAmount / this.heroesPerPage)).fill(0).map((value, index) => index+1);
    let pages =  totalPages.slice(this.props.currentPage, 3);
    if (this.props.heroesAmount - this.props.currentPage >= 6) {
        pages = pages.concat(totalPages.slice(totalPages.length-3, totalPages.length))
    } 
    return(
        <div className="pagination">
            <span>&laquo;</span>
            {pages.map((value, i, arr) => {
                if (arr.length >= 6) {
                    if (i === 3) {
                        return (
                            <div key={value}>                                
                                <span>...</span>
                                <span onClick={() => this.props.setCurrentPage(value-1)}>{value}</span>
                            </div>
                            )
                    }
                }
                return <span onClick={() => this.props.setCurrentPage(value-1)} key={value}>{value}</span>})}
            <span>&raquo;</span>
        </div>
    )
  }
}

const mapStateToProps = state => {
    console.log(state.characters.heroes)
    return(
        {
            heroesAmount: state.characters.heroes.filteredHeroes.total,
            currentPage: state.characters.heroes.currentPage
        }
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentPage: setCurrentPageFunc(dispatch)
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Pagination);