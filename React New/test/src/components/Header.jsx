const Header = () => {
  return (
    <header className="navbar">
    <div className="logo">Cars</div>
    <nav className="nav-container">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
    <button className="login-btn">Login</button>
  </header>
  )
}

export default Header