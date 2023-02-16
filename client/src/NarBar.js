import { Link } from 'react-router-dom';

function NavBar() {


  function handleLogout({ setUser }) {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (

    <nav className="nav">
        <Link to="/" className="site-title">Home</Link>
    <div>
        <Link to="/gamelist">Game List</Link>
        <Link to="/gamecollection">Game List</Link>
    
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
    </div>
    </nav>
    
    
    
  );
}
export default NavBar;