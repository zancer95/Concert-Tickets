import React, { useState, useEffect } from 'react';

function GameList(props) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('/games')
      .then(res => res.json())
      .then(setGames);
  }, []);

  const handleAddToCollection = (gameId) => {
    const userId = props.user.id; 
    fetch('/game_collections', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: userId, game_id: gameId })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          console.log('Game added to collection!');
          }
        });
  };

  return (
    <div>
      <h1>Games</h1>
      <ul>
        {games.map(game => (
          <h4 key={game.id}>
            {game.name} ({game.genre}, {game.platform})
            <button onClick={() => handleAddToCollection(game.id)}>Add to Collection</button>
          </h4>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
