import { Link } from 'react-router-dom';

function NavBar({ user, setUser }) {


  function handleLogout() {
    fetch("/signout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (

    <nav className="nav">
        <Link to="/" className="site-title">Home</Link>
    <div>
        <Link to="gamelist">Game List</Link>
        <Link to="gamecollection">Game Collection</Link>
    
        <ul>
          <button onClick={handleLogout}>Logout</button>
        </ul>
    </div>
    </nav>
    
  );
}
export default NavBar;