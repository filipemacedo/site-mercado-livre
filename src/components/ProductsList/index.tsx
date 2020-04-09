import React from 'react';
import ProductPicture from '../ProductPicture';
import ProductInformations from '../ProductInformations';
import MacbookImage from '../../assets/images/macbook.webp';

import './products-list.styles.scss';

interface Props {
  products: any[];
}

const ProductsList: React.FC<Props> = () => {
  return (
    <ol className="products-list">
      <li className="products-list__product">
        <ProductPicture alt="Um macbook novo!" src={MacbookImage} />
        <ProductInformations
          hideShippingIcon={false}
          name="Egeo Desodorante Colônia Dolce 90ml 
          Egeo Desodorante Colônia Dolce 90ml
          Egeo Desodorante Colônia Dolce 90ml
          Egeo Desodorante Colônia Dolce 90ml
          Egeo Desodorante Colônia Dolce 90ml
          Egeo Desodorante Colônia Dolce 90ml
          Egeo Desodorante Colônia Dolce 90ml
          Egeo Desodorante Colônia Dolce 90ml
          "
          value={1998}
        />
      </li>
      <li className="products-list__product">
        <ProductPicture alt="Um macbook novo!" src={MacbookImage} />
        <ProductInformations
          hideShippingIcon={false}
          name="Egeo Desodorante Colônia Dolce 90ml"
          value={1998}
        />
      </li>
      <li className="products-list__product">
        <ProductPicture alt="Um macbook novo!" src={MacbookImage} />
        <ProductInformations
          hideShippingIcon={false}
          name="Egeo Desodorante Colônia Dolce 90ml"
          value={1998}
        />
      </li>
      <li className="products-list__product">
        <ProductPicture alt="Um macbook novo!" src={MacbookImage} />
        <ProductInformations
          hideShippingIcon={false}
          name="Egeo Desodorante Colônia Dolce 90ml"
          value={1998}
        />
      </li>
      <li className="products-list__product">
        <ProductPicture alt="Um macbook novo!" src={MacbookImage} />
        <ProductInformations
          hideShippingIcon={false}
          name="Egeo Desodorante Colônia Dolce 90ml"
          value={1998}
        />
      </li>
    </ol>
  );
};

export default React.memo(ProductsList);
