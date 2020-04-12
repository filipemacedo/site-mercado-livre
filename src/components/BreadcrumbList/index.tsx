import React from 'react';

import { Link } from 'react-router-dom';

import RightIcon from '../../assets/icons/right.svg';

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
          key={element.replace(' ', '')}>
          <Link to={`/items?search=${element}`}>{element}</Link>
          {!isLastCategory(index) && (
            <img className="icon-arrow-right" src={RightIcon} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default React.memo(BreadcrumbList);
