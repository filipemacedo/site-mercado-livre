import React from 'react';
import ProductPicture from '../ProductPicture';
import ProductInformations from '../ProductInformations';

import './products-list.styles.scss';
import { ItemsInterface } from '../../store/modules/items/items.types';
import { Link } from 'react-router-dom';
import numberFormatCurrency from '../../utils/number-format-currency';

interface Props {
  products: ItemsInterface[];
}

const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <ol className="products-list">
      {products.map(
        ({
          id,
          title,
          picture,
          condition,
          free_shipping: freeShiping,
          price,
          address,
        }) => (
          <li className="products-list__product" key={id}>
            <Link to={`/items/${id}`}>
              <ProductPicture alt={title} src={picture} />
              <ProductInformations
                address={address}
                condition={condition}
                hideShippingIcon={!freeShiping}
                name={title}
                symbolCurrency={price?.symbol}
                value={numberFormatCurrency({
                  currency: price.currency,
                  decimals: price.decimals,
                  value: price.amount,
                })}
              />
            </Link>
          </li>
        ),
      )}
    </ol>
  );
};

export default React.memo(ProductsList);
