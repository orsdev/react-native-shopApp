import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, Text, View } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import { RootState } from '../../redux/rootReducer';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../redux/actions/cart.action';
import { CustomHeader } from '../../components/ui/HeaderButton';
import { Item } from 'react-navigation-header-buttons';

type ProductType = {
   imageUrl: string;
   title: string;
   price: number;
};

const ProductOverviewScreen = ({ navigation }: {
   navigation: any
}) => {
   const products: ProductType | object[] = useSelector((state: RootState) => state.products.availableProducts);

   const dispatch = useDispatch();


   React.useEffect(() => {
      navigation.setOptions({
         headerLeft: () => (
            <CustomHeader>
               <Item title="Menu" iconName="menu" onPress={() => {
                  navigation.dispatch(DrawerActions.openDrawer());
               }} />
            </CustomHeader>
         ),
         headerRight: () => (
            <CustomHeader>
               <Item title="Cart" iconName="cart" onPress={() => {
                  navigation.navigate('Cart')
               }} />
            </CustomHeader>
         ),
      });
   }, [navigation])

   if (products.length === 0) {
      return (<View style={{
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center'
      }}>
         <Text style={{
            fontSize: 20
         }}>Product not available</Text>
      </View>)
   }

   return (
      <View>
         <FlatList
            data={products}
            renderItem={(itemData: { item: any }) => {
               return (
                  <ProductItem
                     image={itemData.item.imageUrl}
                     title={itemData.item.title}
                     price={itemData.item.price}
                     onViewDetail={() => {
                        navigation.navigate('ProductDetail', {
                           productId: itemData.item.id,
                           productTitle: itemData.item.title
                        })
                     }}
                     onAddToCart={() => {
                        dispatch(cartActions.addToCart(itemData.item));
                     }}
                  />
               )
            }}
         />
      </View>
   )
}

export default ProductOverviewScreen;
