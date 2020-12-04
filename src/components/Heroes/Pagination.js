import React from 'react';
import { connect } from 'react-redux';
import './Pagination.css';
import {setCurrentPageFunc} from '../../actions/Heroes';

class Pagination extends React.Component {
    constructor(props) {
    super(props);
    this.heroesPerPage = 25;
  }
  
  render() {
    const totalPages = new Array(Math.ceil(this.props.heroesAmount /
    this.heroesPerPage)).fill(0).map((value, index) => index + 1);
    let startPage = this.props.currentPage > totalPages.length - 2 ? this.props.currentPage -
    (5 - (totalPages.length - this.props.currentPage)) : this.props.currentPage - 2;
    if (startPage < 0) {
        startPage = 0
    }
    const endPage = this.props.currentPage < 2 ? this.props.currentPage+(5 - this.props.currentPage) : this.props.currentPage + 3;

    let pages =  totalPages.slice(startPage || 0, endPage);



    return(
        <div className="pagination">
            <span onClick={() => this.props.setCurrentPage(0)}>&laquo;</span>
            {pages.map((value, i, arr) => (
              <span className={(this.props.currentPage ===  value-1 ? 'pagination-item-active' : '')} onClick={() => this.props.setCurrentPage(value-1)} key={value}>{value}</span>
            ))}
            <span onClick={() => this.props.setCurrentPage(totalPages.length-1)}>&raquo;</span>
        </div>
    )
    }
}

const mapStateToProps = state => {
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