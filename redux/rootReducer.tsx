import { combineReducers } from 'redux';
import productReducer from './reducers/product.reducer';
import cartReducer from './reducers/cart.reducer';

export const rootReducer = combineReducers({
   cart: cartReducer,
   products: productReducer
});

export type RootState = ReturnType<typeof rootReducer>;