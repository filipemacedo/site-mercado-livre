import React from 'react';
import BreadcrumbList from '../BreadcrumbList';

import "./navigation-breadcrumb.styles.scss";

interface Props {
  categories: string[];
}

const NavigationBreadcrumb: React.FC<Props> = ({ categories }) => {
  return (
    <section className="navigation container">
      <div className="navigation-breadcrumb">
        <BreadcrumbList categories={categories} />
      </div>
    </section>
  );
};

export default NavigationBreadcrumb;
