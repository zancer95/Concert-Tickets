import './App.css';
import { useState, useEffect } from "react";
import GameCollection from './GameCollection';
import GameList from './pages/GameList';
import Login from './pages/Login';
import NavBar from './NarBar';
import { Routes, Route} from 'react-router-dom';



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
    <NavBar />
    <div className="container" >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gamelist" element={<GameList />} />
        <Route path="/gamecollection" element={<GameCollection />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
