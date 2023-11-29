import React from 'react';
import logoImage from "../Images/lockup long (1).png";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='img-footer'>
        <img src={logoImage} alt="Georgetown University Logo" className='logo2'/>
        </div>
        <div className='text-footer'>
            <p> Connect</p>
            <p> Accessibiliy</p>    
            <p> Copyright</p>      
            <p> Privacy</p>
        </div>
    </footer>
  );
};

export default Footer;