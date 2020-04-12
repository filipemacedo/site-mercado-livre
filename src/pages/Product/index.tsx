import React, { useEffect } from 'react';
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
import ErrorBox from '../../components/ErrorBox';
import getErrorMessage from '../../utils/error-message';
import applicationConfig from '../../config/application';

interface ProductRouterProps {
  id: string;
}

const Product: React.FC<RouteComponentProps<ProductRouterProps>> = ({
  match,
}) => {
  const dispatch = useDispatch();
  const { selectedItem, loading, error, errorDetails } = useSelector(
    ({ items }: ApplicationState) => items,
  );

  useEffect(() => {
    const { id } = match.params;

    dispatch(findItem(id));

    return () => {
      dispatch(resetFindItem());
    };
  }, [match, dispatch]);

  function definePageTags() {
    if (selectedItem) {
      return {
        title: `${selectedItem.title} em ${applicationConfig.name}`,
        description: selectedItem.description,
        imagePreview: selectedItem.picture,
      };
    }
  }

  return (
    <DefaultLayout page={definePageTags()}>
      {error ? (
        <ErrorBox description={errorDetails?.message} title="¡Perdon!" />
      ) : (
        <section className="product">
          <ContainerBox>
            {loading ? (
              <DesiredProductPlaceholder />
            ) : selectedItem ? (
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
            ) : (
              <ErrorBox description={getErrorMessage(404)} title="¡Perdon!" />
            )}
          </ContainerBox>
        </section>
      )}
    </DefaultLayout>
  );
};

export default Product;
