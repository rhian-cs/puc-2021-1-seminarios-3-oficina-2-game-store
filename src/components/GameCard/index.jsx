import React from 'react'

import './styles.css'

const formatPrice = (price) => {
  if (!price)
    return '...';

  if(isNaN(price))
    return price;

  return `R$ ${price.toFixed(2).replace('.', ',')}`
}

const GameCard = ({ title, gameStudio, price, gameId }) => {
  const imgSrc = `https://cdn.cloudflare.steamstatic.com/steam/apps/${gameId}/capsule_616x353.jpg`
  const steamUrl = `https://store.steampowered.com/app/${gameId}/`

  return (
    <a href={steamUrl} className="card" target="_blank">
      <img src={imgSrc} alt={title}/>
      <div className="card-content">
        <div className="card-content-info">
          <h2>{title}</h2>
          <h3>{gameStudio}</h3>
        </div>
        <div className="card-content-price">
          <span>{formatPrice(price)}</span>
        </div>
      </div>
    </a>
  )
}

export default GameCard
