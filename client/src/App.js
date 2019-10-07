import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount () {
    
      axios.get(`https://api.github.com/users/mynameisjasmine`)
      .then(res => {
        this.setState({user: res.data})
        console.log(res.data);
      })
    .catch(error => console.log(error));

    axios.get(`https://api.github.com/users/mynameisjasmine/followers`)
    .then(res => {
      this.setState({followers: res.data})
      console.log(res.data);
    })
  .catch(error => console.log(error));

  }


  render () {

  return (
    <div className="App">
      <h2 className="title">React Github User Card</h2>

    <UserCard followerData={this.state.followers}/>
    </div>
  );

  }
}
  


export default App;
