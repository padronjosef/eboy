import React, {
  ScrollView,
  Button,
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {addToCard} from '../store/counterSlice';

import Toast from 'react-native-toast-message';

export const Details = ({route}) => {
  const dispatch = useDispatch();

  const product = route.params.product;
  const {price, title, image, rating, description} = product;

  const stars = Math.ceil(rating?.rate || 0);
  const arrayFromStars = Array.from({length: stars}, (_, index) => index + 1);

  const handleOnPress = () => {
    Toast.show({
      type: 'success',
      text1: 'Product added ✅',
      visibilityTime: 1500,
    });

    dispatch(addToCard(product));
  };

  return (
    <ScrollView>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rating}>
          <Text style={styles.price}>$.{price}</Text>

          <View style={styles.rating}>
            <Text style={styles.count}>({rating?.count})</Text>

            <View style={styles.starWrapper}>
              {arrayFromStars.map(item => (
                <Image
                  key={item}
                  style={styles.star}
                  source={require('../assets/star.png')}
                />
              ))}
            </View>
          </View>
        </View>

        <Text style={styles.title}>{description}</Text>
        <Image style={styles.image} source={{uri: image}} />

        <Button title="Add to cart" onPress={handleOnPress} />
      </View>
    </ScrollView>
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
    width: '100%',
    height: 200,
    borderRadius: 8,
    resizeMode: 'stretch',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  starWrapper: {
    flexDirection: 'row',
    gap: 4,
  },
  star: {
    width: 16,
    height: 16,
  },
  count: {
    fontSize: 16,
    color: '#000',
  },
});
