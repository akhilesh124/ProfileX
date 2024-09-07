import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Header.css';

function Header() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
  };
const handlelogoClick  = ()=>{
  navigate('/')
}
  return (
    <header className="header">
      <div className="logo" onClick={handlelogoClick}>
        <img src="logo192.png" alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header-buttons">
        <button className="profile-button" onClick={handleProfileClick}>Profile</button>
        <button className="login-button" >Login</button>
      </div>
    </header>
  );
}

export default Header;
