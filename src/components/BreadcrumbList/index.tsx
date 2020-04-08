import React from 'react';

import './breadcrumb-list.styles.scss';

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
          key={element}>
          <a>{element}</a>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(BreadcrumbList);
