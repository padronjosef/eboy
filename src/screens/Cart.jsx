import React, {FlatList} from 'react-native';

import {useSelector} from 'react-redux';

import {CartCard} from '../components/CartCard';
import {EmptyCart} from '../components/EmptyCart';

export const Cart = () => {
  const products = useSelector(state => state.cart.products);

  if (products.length === 0) {
    return <EmptyCart />;
  }

  return (
    <FlatList
      data={products}
      renderItem={({item}) => <CartCard product={item} />}
      keyExtractor={item => String(item.id)}
    />
  );
};
