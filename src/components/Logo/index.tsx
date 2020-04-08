import React from 'react';
import { Link } from 'react-router-dom';

import LogoImage from "../../assets/icons/Logo_ML@2x.png.png"

import "./logo.styles.scss";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img alt="Mercado Livre" src={LogoImage} />
      </Link>
    </div>
  );
};

export default Logo;
