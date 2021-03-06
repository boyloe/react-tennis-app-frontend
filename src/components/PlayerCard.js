import React from 'react'

export default function PlayerCard({name, age, gender, skill, phone, court, imgurl}) {
    return (
        <div className="player-card">
            <img className="player-image" src={imgurl} alt={name} />
            <h2 className="player-name">{name}</h2>
            <ul>
                <li className="attributes">Age: {age}</li>
                <li className="attributes">Gender: {gender}</li>
                <li className="attributes">Skill: {skill}</li>
                <li className="attributes">Phone: {phone}</li>
                <li className="attributes">Home Court: {court.name}</li>
            </ul>
        </div>
    )
}
