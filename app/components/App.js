import React, {Component} from 'react';
import { NameCard } from './NameCard';

const nameApi = 'https://willowtreeapps.com/api/v1.0/profiles/';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  // fetch all of the names from the WT profile api once the main component mounts
  componentDidMount(){
    fetch(nameApi)
      .then(names => names.json())
      .then(names => {
        this.setState({
          nameInfo: names
        })
      })
  };

  render(){
    if(!this.state.nameInfo) {
      return <div> Loading... </div>;
    }
    return(
      <div className="container">
        <div>This is the real deal name game</div>
        <div className="row">
          {this.state.nameInfo.map(name => {
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
