import React from 'react';
import logoImage from "../Images/lockup single (1).png";

const Header = () => {
  return (
    <header className='header'>
      <img src={logoImage} alt="Georgetown University Logo" className='logo' />
    </header>
  );
};

export default Header;