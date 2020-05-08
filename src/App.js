import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component.jsx';
import { SearchBox } from './components/search-box/search-box-component.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(user => this.setState({ monsters: user }));
  }

  render() {
    const { monsters, searchField } = this.state ;
    const filteredMonster = monsters.filter(monster =>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className='App'>
        <h1 font->Monsters Mahoc Rolodex</h1>
        <SearchBox
          placeholder='search here'
          handlechange={e => this.setState({ searchField: e.target.value })}
        />
        {console.log(filteredMonster)}
        <CardList monsters={filteredMonster} />
      </div>
    )
  }
}

export default App;
