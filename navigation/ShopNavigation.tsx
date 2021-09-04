import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Platform } from 'react-native';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';

import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {

   return (
      <Stack.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
            },
            headerTitleStyle: {
               color: Platform.OS === 'android' ? 'white' : Colors.primary
            }
         }}
      >
         <Stack.Screen
            name="ProductOverview"
            component={ProductOverviewScreen}
            options={{
               title: 'All Products'
            }} />
         <Stack.Screen
            name="ProductDetail"
            component={ProductDetailScreen} />
         <Stack.Screen
            name="Cart"
            component={CartScreen} />
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
