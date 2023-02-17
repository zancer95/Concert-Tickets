import './App.css';
import { useState, useEffect } from "react";
import GameCollection from './pages/GameCollection';
import GameList from './pages/GameList';
import Login from './pages/Login';
import NavBar from './NarBar';
import { Routes, Route } from 'react-router-dom';



function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  if (!user) return <Login onLogin={setUser} />;

  return (
    
    <>
    <NavBar user={user} setUser={setUser}/>
    <div className="container" >
      <Routes>
        <Route path='games/:id' element={<GameCollection/>} />
        <Route path='gamelist' element={<GameList/>} />
        <Route path='/' element={<Login/>} />
      </Routes>
    
    </div>
    </>
  );
}

export default App;
