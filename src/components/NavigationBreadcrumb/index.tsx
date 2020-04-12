import React from 'react';
import BreadcrumbList from '../BreadcrumbList';

import './navigation-breadcrumb.styles.scss';

interface Props {
  categories: string[];
}

const NavigationBreadcrumb: React.FC<Props> = ({ categories }) => {
  return (
    <div
      className="container">
      <div className="navigation-breadcrumb">
        <BreadcrumbList categories={categories} />
      </div>
    </div>
  );
};

export default NavigationBreadcrumb;
