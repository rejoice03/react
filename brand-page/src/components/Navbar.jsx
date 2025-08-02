// import "./App.css";


function Navbar() {
    
    
  return (
    <nav className="container">
      <div className="logo">
        <img src="./image/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button>Login</button>
      
    </nav>
  );
}

export default Navbar;
