import React, {StyleSheet, View, Text, Image, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export const HomeCard = ({product}) => {
  const navigation = useNavigation();
  const {price, title, image} = product;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>$.{price}</Text>
      <Image style={styles.image} source={{uri: image}} />

      <Button
        title="Check Details"
        onPress={() => navigation.navigate('Details', {product})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#96a0eb',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    gap: 16,
  },
  title: {
    fontSize: 24,
    color: '#000',
  },
  price: {
    alignSelf: 'baseline',
    color: '#000',
    fontSize: 16,
    backgroundColor: '#F2f2f2',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  image: {
    flex: 1,
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
    borderRadius: 8,
  },
});
