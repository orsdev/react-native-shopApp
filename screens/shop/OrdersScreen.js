import React from 'react';
import { FlatList, Text, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { DrawerActions } from '@react-navigation/native';

import { CustomHeader } from '../../components/ui/HeaderButton';
import { Item } from 'react-navigation-header-buttons';
import OrderItem from '../../components/shop/OrderItem';

const OrdersScreen = props => {
   const orders = useSelector(state => state.orders.orders);

   React.useLayoutEffect(() => {
      props.navigation.setOptions({
         headerLeft: () => (
            <CustomHeader>
               <Item title="Menu" iconName="menu" onPress={() => {
                  props.navigation.dispatch(DrawerActions.openDrawer());
               }} />
            </CustomHeader>
         ),
      });
   }, [props.navigation])

   return (
      <FlatList
         data={orders}
         keyExtractor={item => item.id}
         renderItem={itemData => (
            <OrderItem
               amount={itemData.item.totalAmount}
               items={itemData.item.items}
            />
         )}
      />
   );
};

export default OrdersScreen;
