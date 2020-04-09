/* eslint-disable react/jsx-max-depth */

import React from 'react';
import Header from '../../components/Header';
import NavigationBreadcrumb from '../../components/NavigationBreadcrumb';

import ProductsList from '../../components/ProductsList';
import ContainerBox from '../../components/ContainerBox';

import './products.styles.scss';

const Products: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <NavigationBreadcrumb
          categories={[
            'Eletrônica, Áudio e Vídeo',
            'iPod',
            'Reproductores',
            'iPod Touch',
            '32 GB',
          ]}
        />
        <section className="products">
          <ContainerBox>
            <ProductsList products={[]} />
          </ContainerBox>
        </section>
      </main>
    </>
  );
};

export default Products;
