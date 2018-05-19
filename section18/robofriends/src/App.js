import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })        
    }

    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        // console.log(filterRobots);
        return (
            <div className='tc'>
                <h1>Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filterRobots} />
            </div>
        )
    }
}

export default App;