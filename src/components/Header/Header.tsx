import React, { FC } from 'react';
import './Header.scss';
import logo from '../../assets/image/logo.png';

const Header: FC = () => {
  return (
    <div className="header">
      <div className="header__image">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
