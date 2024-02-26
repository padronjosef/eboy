import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addToCard: (state, rawProduct) => {
      const newProduct = rawProduct.payload;

      let productExists = false;

      state.products.forEach(product => {
        if (product.id === newProduct.id) {
          // Product on cart, add 1 more
          product.amount = (product.amount || 1) + (newProduct.amount || 1);
          productExists = true;
        }
      });

      if (!productExists) {
        // Product not in cart, add the product
        state.products.push({...newProduct, amount: newProduct.amount || 1});
      }
    },
    removeFromCart: (state, rawProduct) => {
      const newProduct = rawProduct.payload;

      const newArrayProducts = state.products.filter(
        product => product.id !== newProduct.id,
      );

      state.products = newArrayProducts;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToCard, removeFromCart} = counterSlice.actions;

export default counterSlice.reducer;
