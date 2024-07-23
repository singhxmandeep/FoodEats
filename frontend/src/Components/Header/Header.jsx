import React from 'react';
import "./Header.css";

const Header = () => {
  const navigateToMenu = () => {
    document.getElementById('explore-menu').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food...</h2>
        <p>Discover a wide variety of delicious dishes and have them delivered straight to your door. From savory meals to sweet treats, satisfy your cravings with our quick and easy online ordering system. Bon appétit!</p>
        <button onClick={navigateToMenu}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
