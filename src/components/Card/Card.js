import React from 'react'

export const Card = ({character}) => {
    return (
    <div className="card" style={{width: '14rem'}}>
        <img className="card-img-top" src={character.image} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">Gender : {character.gender}</p>
            <p className="card-text">Status : {character.status}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    )
}

export default Card;