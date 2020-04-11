import React from 'react';

import './breadcrumb-list.styles.scss';
import { Link } from 'react-router-dom';

interface Props {
  categories: string[];
}

const BreadcrumbList: React.FC<Props> = ({ categories }) => {
  function isLastCategory(index: number): boolean {
    return index === categories.length - 1;
  }

  return (
    <ul className="navigation-breadcrumb__list">
      {categories.map((element: string, index: number) => (
        <li
          className={
            isLastCategory(index)
              ? 'navigation-breadcrumb__list__element--active'
              : ''
          }
          key={element.replace(' ', '')}>
          <Link to={`/items?search=${element}`}>{element}</Link>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(BreadcrumbList);
