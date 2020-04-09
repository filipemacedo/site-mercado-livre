import React from 'react';
import ContainerBox from '../../components/ContainerBox';
import DefaultLayout from '../../layouts/Default';
import DesiredProduct from '../../components/DesiredProduct';

import './product.styles.scss';

const Product = () => {
  return (
    <DefaultLayout
      categories={[
        'Eletrônica, Áudio e Vídeo',
        'iPod',
        'Reproductores',
        'iPod Touch',
        '32 GB',
      ]}>
      <section className="product">
        <ContainerBox>
          <DesiredProduct
            condition="Nuevo"
            description="Enviamos fotos e videos da máquina assim que efetuada a compra comprovando o funcionamento da máquina,
              assim como a fonte da máquina. Enviamos fotos e videos da máquina assim que efetuada a compra comprovando o funcionamento da máquina,
              assim como a fonte da máquina."
            name="Macbook Pro I5 2.7ghz/8gb 1867mhz/ssd 256gb Mod A1502/2015"
            onPurchaseClick={() => ({})}
            sales={200}
            value={1980}
          />
        </ContainerBox>
      </section>
    </DefaultLayout>
  );
};

export default Product;
