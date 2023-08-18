import React from 'react'
import "./Card.css"

function Card({ pokemon }) {
  return (
    <div className='card'>
      <div className='cardImg'>
        <img src={pokemon.sprites.front_default} alt=''></img>
      </div>
      <h3 className='cardName'>{pokemon.name}</h3>
      <div className='cardTypes'>
        <div className='title'>TYPE</div>
        {pokemon.types.map((type) => {
          return (
            <div key={type.type.name}>
              <span className='typeName'>{type.type.name}</span>
            </div>
          )
        })}
      </div>
      <div className='cardInfo'>
        <div className='cardData'>
          <p className='title'>WEIGHT: {pokemon.weight}</p>
        </div>
        <div className='cardData'>
          <p className='title'>HEIGHT: {pokemon.height}</p>
        </div>
        <div className='cardData'>
          <p className='title'>ABILITY: {pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  )
}

export default Card