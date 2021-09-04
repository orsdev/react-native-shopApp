import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, Text, View } from 'react-native';

import { RootState } from '../../redux/rootReducer';

import ProductItem from '../../components/shop/ProductItem';

const ProductOverviewScreen = () => {
   const products = useSelector((state: RootState) => state.products.availableProducts);

   const renderProducts = ({ item }: {
      item: {
         title?: string;
      }
   }) => (
      <Text>{item.title}</Text>
   )

   return (
      <View>
         <FlatList
            data={products}
            renderItem={renderProducts}
         />
         <ProductItem />
      </View>
   )
}

export default ProductOverviewScreen;
