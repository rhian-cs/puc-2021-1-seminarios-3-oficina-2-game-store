import React from 'react'

import './styles.css'

const GameCard = ({ title, gameStudio, price, gameId }) => {
  const imgSrc = `https://cdn.cloudflare.steamstatic.com/steam/apps/${gameId}/header.jpg`

  return (
    <article className="card">
      <img src={imgSrc} alt={title}/>
      <div className="card-content">
        <div className="card-content-info">
          <h2>{title}</h2>
          <h3>{gameStudio}</h3>
        </div>
        <div className="card-content-price">
          <span>R$ {price}</span>
        </div>
      </div>
    </article>
  )
}

export default GameCard