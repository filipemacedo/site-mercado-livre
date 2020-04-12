import React from 'react';

import ErrorIcon from '../../assets/icons/error.svg';

import './error-box.styles.scss';

interface ErrorBoxProps {
  title?: string;
  description?: string;
}

const ErrorBox: React.FC<ErrorBoxProps> = ({ title = 'Erro!', description = "" }) => (
  <div className="container">
    <section className="error box padding--16">
      <picture className="error__icon margin-right--16">
        <img src={ErrorIcon} />
      </picture>
      <div className="error__message">
        <h2 className="error__message-title">{title}</h2>
        <p className="error__message-description">{description}</p>
      </div>
    </section>
  </div>
);

export default ErrorBox;
