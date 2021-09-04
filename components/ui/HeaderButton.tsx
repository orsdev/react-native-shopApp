import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
   HeaderButtons,
   HeaderButton,
} from 'react-navigation-header-buttons';
import { Platform } from 'react-native';
import Colors from '../../constants/Colors';

const IoniconsHeaderButton = (props: any) => (
   <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} color={Platform.OS === 'android' ? 'white' : Colors.primary} />
);


export function CustomHeader({ children }: { children: any }) {

   return (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
         {children}
      </HeaderButtons>
   )
}