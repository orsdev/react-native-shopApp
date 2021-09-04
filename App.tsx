import React from 'react';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import { store as ReduxStore } from './redux/store';
import { useFonts } from 'expo-font';
import ShopNavigation from './navigation/ShopNavigation';


export default function App() {

  let [fontsLoaded] = useFonts({
    'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSansRegular': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={ReduxStore}>
      <ShopNavigation />
    </Provider>
  )
}

