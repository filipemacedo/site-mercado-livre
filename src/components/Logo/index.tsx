import React from 'react';
import { Link } from 'react-router-dom';

import LogoHighImage from '../../assets/icons/Logo_ML@2x.png.png';
import LogoLowImage from '../../assets/icons/Logo_ML.png';

import './logo.styles.scss';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img
          alt="Mercado Livre"
          src={LogoLowImage}
          srcSet={`${LogoLowImage} 500w, ${LogoHighImage} 768w`}
        />
      </Link>
    </div>
  );
};

export default Logo;
