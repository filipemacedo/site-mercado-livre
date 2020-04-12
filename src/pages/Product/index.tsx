import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ContainerBox from '../../components/ContainerBox';
import DefaultLayout from '../../layouts/Default';
import DesiredProduct from '../../components/DesiredProduct';

import './product.styles.scss';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  findItem,
  resetFindItem,
} from '../../store/modules/items/items.actions';
import { ApplicationState } from '../../store';
import numberFormatCurrency from '../../utils/number-format-currency';
import DesiredProductPlaceholder from '../../components/DesiredProductPlaceholder';

interface ProductRouterProps {
  id: string;
}

const Product: React.FC<RouteComponentProps<ProductRouterProps>> = ({
  match,
}) => {
  const dispatch = useDispatch();
  const { selectedItem, loading } = useSelector(
    ({ items }: ApplicationState) => items,
  );

  useEffect(() => {
    const { id } = match.params;

    dispatch(findItem(id));

    return () => {
      dispatch(resetFindItem());
    };
  }, [match, dispatch]);

  function definePageTitle() {
    if (selectedItem) {
      return `${selectedItem.title} em ${process.env.REACT_APP_NAME}`;
    }
  }

  return (
    <DefaultLayout page={{ title: definePageTitle() }}>
      <section className="product">
        <ContainerBox>
          {loading && <DesiredProductPlaceholder />}
          {selectedItem && (
            <DesiredProduct
              condition={selectedItem.condition}
              description={selectedItem.description}
              name={selectedItem.title}
              onPurchaseClick={() => ({})}
              picture={selectedItem.picture}
              sales={selectedItem.sold_quantity}
              symbolCurrency={selectedItem.price.symbol}
              value={numberFormatCurrency({
                currency: selectedItem.price.currency,
                decimals: selectedItem.price.decimals,
                value: selectedItem.price.amount,
              })}
            />
          )}
        </ContainerBox>
      </section>
    </DefaultLayout>
  );
};

export default Product;
