import React from 'react';

import ProductsList from '../../components/ProductsList';
import ContainerBox from '../../components/ContainerBox';
import DefaultLayout from '../../layouts/Default';

import './search-results.styles.scss';

const Products: React.FC = () => {
  return (
    <DefaultLayout
      categories={[
        'Eletrônica, Áudio e Vídeo',
        'iPod',
        'Reproductores',
        'iPod Touch',
        '32 GB',
      ]}>
      <section className="products">
        <ContainerBox>
          <ProductsList products={[]} />
        </ContainerBox>
      </section>
    </DefaultLayout>
  );
};

export default Products;
