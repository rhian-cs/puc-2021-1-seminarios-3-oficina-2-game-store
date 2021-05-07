import React from 'react';

import './App.css'

import Menu from './components/Menu'
import Heading from './components/Heading'
import GameCard from './components/GameCard'

import cards from './components/GameCard/mock.js'

function App() {
  return (
    <main className="container">
      <div>
        <Menu />
      </div>
      <section>
        <Heading title="Most Popular"/>

        <div className="card-list">
          {
            cards.mostPopular.map((card, index) => {
              return <GameCard
                key={index}
                title={card.title}
                gameStudio={card.gameStudio}
                price={card.price}
                gameId={card.gameId}
              />
            })
          }
        </div>
      </section>
      <section>
        <Heading title="Upcoming"/>

        <div className="card-list">
          {
            cards.upcoming.map((card, index) => {
              return <GameCard
                key={index}
                title={card.title}
                gameStudio={card.gameStudio}
                price={card.price}
                gameId={card.gameId}
              />
            })
          }
        </div>
      </section>
      <section>
        <Heading title="Free-to-play"/>

        <div className="card-list">
          {
            cards.freeToPlay.map((card, index) => {
              return <GameCard
                key={index}
                title={card.title}
                gameStudio={card.gameStudio}
                price={card.price}
                gameId={card.gameId}
              />
            })
          }
        </div>
      </section>
    </main>
  );
}

export default App;
