import React, {useEffect, useState} from 'react';

import {FlatList} from 'react-native';

import {fetchProducts} from '../network';

import {HomeCard} from '../components/HomeCard';

export const Home = () => {
  const [products, setProducts] = useState(null);

  const getApiData = async () => {
    const apiData = await fetchProducts();
    setProducts(apiData);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <FlatList
      data={products}
      renderItem={({item}) => <HomeCard product={item} />}
      keyExtractor={item => String(item.id)}
    />
  );
};
