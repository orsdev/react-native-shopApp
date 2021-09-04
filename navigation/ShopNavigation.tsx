import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Platform } from 'react-native';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {

   return (
      <Stack.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor: Platform.OS === 'android' ? `` : ``,
            },
            headerTitleStyle: {
               color: Platform.OS === 'android' ? `` : ``,
            }
         }}
      >
         <Stack.Screen
            name="ProductOverview"
            component={ProductOverviewScreen}
            options={{
               title: 'All Products'
            }} />
      </Stack.Navigator>
   )
}

const ShopNavigation = () => {
   return (
      <NavigationContainer>
         <MainNavigation />
      </NavigationContainer>
   )
}

export default ShopNavigation;
