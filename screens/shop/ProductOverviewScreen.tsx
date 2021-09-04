import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, Text, View } from 'react-native';

import { RootState } from '../../redux/rootReducer';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../redux/actions/cart';

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
