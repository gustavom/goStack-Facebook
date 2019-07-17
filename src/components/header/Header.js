import React from 'react';
import './_header.scss';
import Facebook from '../../assets/image/facebook.svg';
import UserIcon from '../../assets/image/icon-user.svg';


function Header(){
  return(
    <header className="header">
      <Facebook width="121px" />
      <div className="profile">
        <span>Meu perfil</span>
      <UserIcon fill="#ffffff" width="25" />
      </div>
    </header>
  )
}

export default Header;