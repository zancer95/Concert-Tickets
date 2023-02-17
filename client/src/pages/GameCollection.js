import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function GameCollection() {
  const [gameCollection, setGameCollection] = useState([]);
  const {id} = useParams()
  

  useEffect(() => {
    fetch(`/game_collections/${id}`)
      .then(res => res.json())
      .then(data => {
        setGameCollection(data)
        console.log(data)
      });
  }, []);


  const handleRemoveFromCollection = (gameCollectionId) => {
    fetch(`/game_collections/${gameCollectionId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
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
            {gc.name} ({gc.genre}, {gc.platform})
            <button onClick={() => handleRemoveFromCollection(gc.id)}>Remove from Collection</button>
          </h4>
        ))}
      </ul>
    </div>
  );
}

export default GameCollection;
  // useEffect(() => {
  //   fetch(`/games/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setGameCollection(data)
  //       console.log(data)
  //     });
  // }, []);

    // const handleRemoveFromCollection = (gameCollectionId) => {
  //   fetch(`/users/${gameCollectionId}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.ok) {
  //         setGameCollection(gameCollection.filter(gc => gc.id !== gameCollectionId));
  //       }
  //     });
  // };