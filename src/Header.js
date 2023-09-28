import React from 'react';
import './App.css';

const Header = ({ isLoggedIn, onLoginClick, onLogoutClick }) => {
  return (
    <header>
    <div class ='top-box'>
      
      <ul className= "nav">
        <li href="" >Головна</li>
        <li href="" >Про нас</li>
        <li href="" >Контакти</li>
      

        
      {isLoggedIn ? (
        <li onClick={onLogoutClick}>Вийти</li>
      ) : (
        <li onClick={onLoginClick}>Увійти</li>
      )}

     
     </ul>
     
    </div>



    </header>
  );
};

export default Header;