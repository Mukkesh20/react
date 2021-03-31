import react, { Component } from 'react';
import { CardList } from './card-list/card-list.component';
import './App.css';
import {Search} from '../src/search/search.component'
class App extends Component {

  constructor() {
    super();
    this.state = {
      users : [],
      searchField : ''
    }
  }

  componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({users : user}));
  }

  handleChange = e => {
      this.setState({searchField : e.target.value})
  }

  render() {

    const { users, searchField } = this.state;
    const filteredUsers = users.filter( user => user.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>MONSTERS ACADEMY</h1>
        <Search placeHolder={"Search the Monster"} onChangeValue= {this.handleChange} />
        <CardList name={filteredUsers}>
        </CardList>
      </div>
    );
  };
}

export default App;
