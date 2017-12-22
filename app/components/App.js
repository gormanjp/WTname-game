import React, {Component} from 'react';
import { NameCard } from './nameCard';
import { Search } from './search';

const nameApi = 'https://willowtreeapps.com/api/v1.0/profiles/';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleSearch = this.handleSearch.bind(this);
  }

  // fetch all of the names from the WT profile api once the app component mounts
  componentDidMount(){
    fetch(nameApi)
      .then(names => names.json())
      .then(names => {
        this.setState({
          allNames: names
        })
      })
  }

  handleSearch(input, nameInfo) {
    const searchResults = nameInfo.filter((person) => {
      const fullName = `${person.firstName} ${person.lastName}`.toLowerCase();
      const jobTitle = person.jobTitle ? person.jobTitle.toLowerCase() : '';
      const jobQuery = input.replace(/\s$/g, '').toLowerCase(); //ignore trailing space
      return fullName.includes(input.toLowerCase()) || jobTitle.includes(jobQuery);
    });
    this.setState({
      searchNames: searchResults
    })
  }

  render(){
    const nameInfo = this.state.searchNames || this.state.allNames;
    if(!nameInfo) {
      return <div> Loading... </div>;
    }
    return(
      <div className="container">
        <div className="center-text">
          <h1 className="raleway-big">FLASH CARDS</h1>
          <div className="line"/>
          <h4 className="raleway-small">Search.  Quiz Yourself.  Click to Flip.</h4>
        </div>
        <Search search={this.handleSearch} nameInfo={this.state.allNames}/>
        <div className="row">
          {nameInfo.map(person => {
            return (
              <NameCard
                key={person.id}
                person={person}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;
