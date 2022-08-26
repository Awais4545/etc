import { configureStore } from '@reduxjs/toolkit';
import OrderSlice from '../store/OrderSlice';
import ProductSlice from '../store/ProductSlice';




const store = configureStore({
    reducer: {

        product: ProductSlice,
        order: OrderSlice


    }
})
export default store