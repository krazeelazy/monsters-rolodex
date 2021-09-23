import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };

        // this.handleChange = this.handleChange.bind(this); // explicitly sets the context of 'this' in handleChange to 'this' in the constructor (the App component)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()) // convert response into json format
            .then(users => this.setState({ monsters: users }));// store the data in the state's monsters attribute
    }

    // handleChange(e) {// requires explicit binding of 'this'
    //     this.setState({ searchField: e.target.value})
    // }
    
    handleChange = (e) => {
        this.setState({ searchField: e.target.value})
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
                monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
            )
        return (
            // lesson 26
            // <div className="App">
            // <header className="App-header">
            //     <img src={logo} className="App-logo" alt="logo" />
            //     <p>{this.state.string}</p>
            //     <button onClick={() => this.setState({ string: 'Hello Andrei' })}>Change Text</button>
            // </header>
            // </div>
            
            // lesson 30: fetching
            // <div className="App">
            //     {
            //         this.state.monsters.map(monster => (
            //             <h1 key={monster.id}> { monster.name } </h1>
            //         ))}
            // </div>

            // lesson 33 1st part
            // <div className="App">
            // <CardList name="M">
            //     <h1>M</h1>
            // </CardList>
            //     {
            //         this.state.monsters.map(monster => (
            //             <h1 key={monster.id}> { monster.name } </h1>
            //         ))}
            // </div>

            //end of lesson 33
            // <div className="App">
            //     <CardList>
            //         {this.state.monsters.map(monster => (
            //             <h1 key={monster.id}> { monster.name } </h1>
            //         ))}
                    
            //     </CardList>
            // </div>

            // // after lesson 37
            // <div className="App">
            //     <CardList monsters={this.state.monsters} />
            // </div>

            // // end of lesson 38
            // <div className='App'>
            //     <input 
            //         type='search' 
            //         placeholder='search monsters' 
            //         onChange={e => this.setState({ searchField: e.target.value})}
            //     />
            //     <CardList monsters={this.state.monsters} />
            // </div>

            // // after lesson 43
            // <div className='App'>
            //     <SearchBox
            //         placeholder='search monster'
            //         handleChange={e => this.setState({ searchField: e.target.value})}
            //     />
            //     <CardList monsters={filteredMonsters} />
            // </div>

            // //after lesson 44
            // <div className='App'>
            //     <SearchBox
            //         placeholder='search monster'
            //         handleChange={this.handleChange}
            //     />
            //     <CardList monsters={filteredMonsters} />
            // </div>


            <div className='App'>
            <h1> Monster's Rolodex </h1>
                <SearchBox
                    placeholder='search monster'
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;