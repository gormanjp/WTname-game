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
    const searchResults = nameInfo.filter((name) => {
      return `${name.firstName} ${name.lastName}`.toLowerCase().includes(input);
    });
    this.setState({
      searchNames: searchResults
    })
  }

  render(){
    const nameInfo = this.state.searchNames || this.state.allNames;
    if(!nameInfo) {
      return <div> Loading... </div>;
    } else {

      return(
        <div className="container test">
          <div>This is the real deal name game</div>
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
}

export default App;
