import React from 'react';
import BreadcrumbList from '../BreadcrumbList';

import './navigation-breadcrumb.styles.scss';
import Container from '../Container';

interface Props {
  categories: string[];
}

const NavigationBreadcrumb: React.FC<Props> = ({ categories }) => {
  return (
    <Container>
      <div className="navigation-breadcrumb">
        <BreadcrumbList categories={categories} />
      </div>
    </Container>
  );
};

export default NavigationBreadcrumb;
