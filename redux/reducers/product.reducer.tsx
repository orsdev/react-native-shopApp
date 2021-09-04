import PRODUCTS from '../../model/dummy-data';

export interface InitialStateProps {
   availableProducts: object[],
   userProducts: object[]
}

const initialState: InitialStateProps = {
   availableProducts: PRODUCTS.filter((prod: any) => prod.ownerId == 'u1'),
   userProducts: PRODUCTS.filter((prod: any) => prod.ownerId == 'u1')
};

const productReducer = (state = initialState) => {
   return state;
}

export default productReducer;