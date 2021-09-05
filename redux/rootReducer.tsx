import { combineReducers } from 'redux';
import productReducer from './reducers/product.reducer';
import cartReducer from './reducers/cart.reducer';
import ordersReducer from './reducers/orders';

export const rootReducer = combineReducers({
   cart: cartReducer,
   products: productReducer,
   orders: ordersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;