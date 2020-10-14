import React from 'react';
import './App.css';
import PlayerContainer from './components/PlayerContainer'
import LogoHeader from './components/LogoHeader';
import AddNewPlayer from './components/AddNewPlayer'
const BASE_URL = `http://localhost:3000`

class App extends React.Component {

  state = {
    players: [],
    courts: [],
    similarPlayers: []

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
    return <option key={court.id} value={court.id}>{court.name}</option>
  })

  postNewPlayer = (player) => {
    console.log(this.state.courts)
    fetch(`${BASE_URL}/players`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(player)
    }).then(response => response.json())      
      .then(player => this.setState({ players: [...this.state.players, player]}))
  }

  filterPlayers = (court) => {
    let matchingPlayers = this.state.player.filter(player => player.court_id === court.id)
    this.setState({similarPlayers: matchingPlayers})
  } 



  render() {
    return (
      <div className="App">
        <LogoHeader />
        <AddNewPlayer className="add-player" courtSelectOption={this.courtSelectOption} postNewPlayer={this.postNewPlayer}/>
        <form className="filter-players">
        </form>
        <div className="container">

          <PlayerContainer players={this.state.players} />
        </div>
      </div>
    );
  }
}

export default App;
