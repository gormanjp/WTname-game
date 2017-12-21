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

  // fetch all of the names from the WT profile api once the main component mounts
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
    let searchResults;
    if(input.slice(0,4).toLowerCase() === 'job:'){
      searchResults = nameInfo.filter((person) => {
        const jobQuery = input.slice(4).replace(/^\s/g, '').toLowerCase(); //ignore leading space and 'job:'
        const jobTitle = person.jobTitle ? person.jobTitle.toLowerCase() : '';
        return jobTitle.includes(jobQuery);
      })
    }else {
      searchResults = nameInfo.filter((person) => {
        const fullName = `${person.firstName} ${person.lastName}`.toLowerCase();
        return fullName.includes(input.toLowerCase());
      });
    }
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
      <div className="container test">
        <div className="center">
          <h1 className="raleway-big">MEMORY</h1>
          <h4 className="raleway-small">Quiz Yourself. Search. Click to Flip.</h4>
        </div>
        <Search search={this.handleSearch} nameInfo={this.state.allNames}/>
        <div className="row">
          {nameInfo.map(name => {
            return (
              <NameCard
                key={name.id}
                firstName={name.firstName}
                lastName={name.lastName}
                image={name.headshot.url}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;
