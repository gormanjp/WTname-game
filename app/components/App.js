import React, {Component} from 'react';
import { NameCard } from './NameCard';

const nameApi = 'https://willowtreeapps.com/api/v1.0/profiles/';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  // fetch all of the names from the wt profile api once the main component mounts
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
      <div>
        <div className="">This is the real deal name game</div>
        <NameCard />
      </div>
    )
  }
}

export default App;
