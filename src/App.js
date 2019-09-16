import React, { Component} from 'react';
import './App.css';
import {CardList } from './component/card-list/card-list.component';
import {SearchBox} from './component/search-box/search-box';


class App extends Component {

  constructor() {
     
    super();

    // all elements need a unique key
    // this helps with re rendering to help react know which specific element needs an update and etc
    this.state = {
      monsters: [
        // {
        //   name: 'Frankenstein',
        //   id: 1
        // },
        // {
        //   name: 'Dracula',
        //   id: 2
        // },
        // {
        //   name: 'Zombie',
        //   id: 3
        // }
      ],
      searchField: ''

    };

    // this.handleChange = this.handleChange.bind(this);
    // use arrow functions for binding instead =>
    // you would have to do whats on line 34 for every class mehtod 
  }

  componentDidMount() {

    // using promises. each .then is a promise
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    // .then(users => console.log(users))
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {

    // destructuring pulls props off an object and lets us set them to const

    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1> Monster Search</h1>
        <SearchBox 
          placeholder='Search it'
          // handleChange={ e => this.setState({ searchField: e.target.value })}
          handleChange = {this.handleChange}
          // adding this.handleChange() to a button as an example, this would invoke the call on render but would not 
          // work when clicked since nothing would be assigned to handleChange.
          // Removing the () creates an actual assignment of the function 
        />
        <CardList monsters = {filteredMonsters} />
      </div>
    );
  }

}

export default App;
