/* eslint-disable react/jsx-max-depth */
import React from 'react';
import NavigationBreadcrumb from '../../components/NavigationBreadcrumb';
import Header from '../../components/Header';
import ContainerBox from '../../components/ContainerBox';
import ProductInformations from '../../components/ProductInformations';
import ProductPicture from '../../components/ProductPicture';
import MacbookImage from '../../assets/images/macbook.webp';

const Product = () => {
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
      <section className="product">
        <ContainerBox>
         <ProductPicture alt="" src={MacbookImage} />
         <ProductInformations hideShippingIcon name="Macbook Pro" value="1980" />
        </ContainerBox>
      </section>
    </main>
  </>
  );
};

export default Product;
