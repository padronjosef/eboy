import React, {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export const GoToCart = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity title="Cart" onPress={() => navigation.navigate('Cart')}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Cart</Text>
        <Image style={styles.cart} source={require('../assets/cart.png')} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    backgroundColor: '#F2f2f2',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    alignSelf: 'baseline',
    color: '#000',
    fontSize: 16,
  },
  cart: {
    width: 16,
    height: 16,
  },
});
