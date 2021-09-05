import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
   createDrawerNavigator,
   DrawerContentScrollView,
   DrawerItemList,
   DrawerItem,
} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';

import { Platform } from 'react-native';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';

import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
               title: 'All Products',
               headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
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


function CustomDrawerContent(props) {
   return (
      <DrawerContentScrollView {...props}>
         <DrawerItemList {...props} />
         <DrawerItem label="Help" onPress={() => alert('Link to help')} />
      </DrawerContentScrollView>
   );
}



const DrawerNavigation = () => {

   return (
      <Drawer.Navigator
         drawerContent={(props) => <CustomDrawerContent {...props} />}>
         <Drawer.Screen
            name="Home"
            component={MainNavigation}
            options={{
               headerShown: false
            }}
         />
         <Drawer.Screen
            name="Orders"
            component={OrdersScreen}
            options={{
               headerStyle: {
                  backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
               },
               headerTitleStyle: {
                  color: Platform.OS === 'android' ? 'white' : Colors.primary
               }
            }}
         />
      </Drawer.Navigator>
   )
}



const ShopNavigation = () => {
   return (
      <NavigationContainer>
         <DrawerNavigation />
      </NavigationContainer>
   )
}

export default ShopNavigation;
