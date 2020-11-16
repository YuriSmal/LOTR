import React from 'react';
import Title from "../title/title";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            flag: true
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleFlagChange = this.handleFlagChange.bind(this)
    }

    handleChange(e) {
       this.setState({name: e.target.value})
    }

    handleFlagChange() {
        this.setState({flag: !this.state.flag})
    }

    render() {
        return(
            <div>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <br/>
                <button onClick={this.handleFlagChange}>PUSH ME</button>
                {this.state.flag && <Title world={this.props.world} title={this.state.name} myFunc={this.handleFlagChange}/>}
            </div>
        )
    }
}

export default Search;
