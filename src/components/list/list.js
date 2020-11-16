import React from 'react';
import "./list.css"
import AdvancedList from "../advancedList/advancedList";
import ListItem from "../listItem/listItem";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "What I want to do?",
            list: ["Drink coffee", "Wash my hands", "Give some food to the Dog"],
            flag: false,
            advancedList: [
                {name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"},
                {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"},
                {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}
            ]
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleList = this.handleList.bind(this)
        this.handleFlagChange = this.handleFlagChange.bind(this)
        this.addItemToTheList = this.addItemToTheList.bind(this)
        this.resetList = this.resetList.bind(this)
    }

    handleChange(e) {
       this.setState({name: e.target.value})
    }

    handleFlagChange() {
        this.setState({flag: !this.state.flag})
    }

    resetList() {
        this.setState({list: []})
    }

    handleList() {
        return this.state.list.map(function(item) {
            return <ListItem item={item} />
        })
    }

    addItemToTheList() {
        this.setState(state => {
            const list = [...state.list, state.name];

            return {
                list, // list: list
                name: "What I want to do?",
            };
        });
    }

    render() {
        let lengthOfArray = this.state.list.length;
        return(
            <div className="list">
                <div>{this.state.name}</div>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <button onClick={this.addItemToTheList}>Set item to the list</button>
                <button onClick={this.resetList}>RESET</button>
                <div>
                    <button onClick={this.handleFlagChange}>Show/hide list</button>
                    {this.state.flag && (<ul>
                        {this.handleList()}
                    </ul>)}
                    {lengthOfArray > 2 ? <AdvancedList list={this.state.advancedList} /> : null}
                </div>
            </div>
        )
    }
}

export default List;
