import React from 'react'
import PlayerCard from './PlayerCard'

export default function PlayerContainer(props) {

    const displayPlayers = () => props.players.map(player => {
        return <PlayerCard key={player.id} name={player.name} age={player.age} gender={player.gender} skill={player.skill} phone={player.phone} court={player.court} imgurl={player.imgurl}/>
    })
    return (
        <div className="player-container">
            {displayPlayers()}
        </div>
    )
}
