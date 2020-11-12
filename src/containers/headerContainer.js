import React from 'react'
import { connect } from 'react-redux'
import { getBookFunc } from '../actions/header'
import Header from '../components/Header/Header'
import { headerReducer } from '../reducers'

const HeaderContainer = ({ header, getBookInfo }) => (
    <Header
        header={header}
        getBookInfo={getBookInfo}
    />
)

const mapStatetoProps = (state) => ({
    header: state.headerReducer
})

const mapDispatchToProps = dispatch => {
    return {
        getBookInfo: getBookFunc(dispatch)
    }
};

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(HeaderContainer)