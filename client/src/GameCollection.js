import React, { useState, useEffect } from 'react';

function GameCollection() {
  const [gameCollection, setGameCollection] = useState([]);

  useEffect(() => {
    fetch('/game_collections')
      .then(res => res.json())
      .then(data => setGameCollection(data));
  }, []);

  const handleRemoveFromCollection = (gameCollectionId) => {
    fetch(`/game_collections/${gameCollectionId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',

      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setGameCollection(gameCollection.filter(gc => gc.id !== gameCollectionId));
        }
      });
  };

  return (
    <div>
      <h1>My Game Collection</h1>
      <ul>
        {gameCollection.map(gc => (
          <h4 key={gc.id}>
            {gc.game.name} ({gc.game.genre}, {gc.game.platform})
            <button onClick={() => handleRemoveFromCollection(gc.id)}>Remove from Collection</button>
          </h4>
        ))}
      </ul>
    </div>
  );
}

export default GameCollection;
