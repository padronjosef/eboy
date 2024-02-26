import React, {Image, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export const GoToHome = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity title="Cart" onPress={() => navigation.navigate('Home')}>
      <Image style={styles.home} source={require('../assets/home.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  home: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
});
