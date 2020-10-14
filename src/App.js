import React from 'react';
import './App.css';
import PlayerContainer from './components/PlayerContainer'
const BASE_URL = `http://localhost:3000`

class App extends React.Component {

  state = {
    players: [],
    courts: []
  }

  componentDidMount() {
    fetch(`${BASE_URL}/players`)
      .then(response => response.json())
      .then(players => this.setState({ players: players }))
    
    fetch(`${BASE_URL}/courts`)
      .then(response => response.json())
      .then(courts => this.setState({ courts: courts }))
  }

  courtSelectOption = () => this.state.courts.map(court => {
    console.log(court)
    return <option key={court.id} value={court.id}>{court.name}</option>
  })

  render() {
    return (
      <div className="App">
        <form className="new-user">
          <input type="text" placeholder="Enter Your Name" />
          <input type="number" placeholder="Enter Your Age" />
          <input type="text" placeholder="Enter Your Gender" />
          <input type="text" placeholder="Enter Your Phone Number" />

          <select name="skill" id="skill-select">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <select name="court_id"> 
            {this.courtSelectOption()}
          </select>       
          <input type='submit' value="Create User"/> 
        </form>
        <PlayerContainer players={this.state.players} />
      </div>
    );
  }
}

export default App;
