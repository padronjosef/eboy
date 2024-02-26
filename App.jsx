import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider} from 'react-redux';
import store from './src/store';

import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

import {Home} from './src/screens/Home';
import {Details} from './src/screens/Details';
import {Cart} from './src/screens/Cart';

import {GoToHome} from './src/components/GoToHome';
import {GoToCart} from './src/components/GoToCart';

const Stack = createNativeStackNavigator();

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'green'}}
      text1Style={{
        fontSize: 20,
        fontWeight: '400',
      }}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      style={{borderLeftColor: 'red'}}
      text1Style={{
        fontSize: 20,
        fontWeight: '400',
      }}
    />
  ),
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={() => ({
              title: 'EBoy',
              headerRight: () => <GoToCart />,
            })}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={() => ({
              title: 'Details',
              headerLeft: () => <GoToHome />,
              headerRight: () => <GoToCart />,
            })}
          />

          <Stack.Screen
            name="Cart"
            component={Cart}
            options={() => ({
              title: 'EBoy',
              headerLeft: () => <GoToHome />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </Provider>
  );
};

export default App;
