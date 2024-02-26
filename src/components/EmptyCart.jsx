import React, {Image, StyleSheet, View} from 'react-native';

export const EmptyCart = () => (
  <View styles={styles.wrapper}>
    <Image
      style={styles.emptyCart}
      source={require('../assets/empty-cart.png')}
    />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCart: {
    padding: 32,
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
});
