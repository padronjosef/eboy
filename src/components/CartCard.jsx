import React, {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Toast from 'react-native-toast-message';

import {removeFromCart} from '../store/counterSlice';

export const CartCard = ({product}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {price, title, image, amount} = product;

  const titleLimited =
    title.length > 20 ? title.substring(0, 20) + '...' : title;

  const handleOnPress = () => {
    Toast.show({
      type: 'error',
      text1: 'Product removed',
      visibilityTime: 1500,
    });

    dispatch(removeFromCart(product));
  };

  return (
    <View style={styles.card}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{titleLimited}</Text>
        <TouchableOpacity onPress={handleOnPress}>
          <Image
            style={styles.remove}
            source={require('../assets/remove.png')}
          />
        </TouchableOpacity>
      </View>

      <Image style={styles.image} source={{uri: image}} />

      <View style={styles.wrapper}>
        <Text style={styles.price}>Total: ({amount})</Text>
        <Text style={styles.price}>$.{price}</Text>
      </View>

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
  remove: {
    width: 20,
    height: 20,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  price: {
    fontSize: 16,
    color: '#000',
  },
  image: {
    flex: 1,
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});
