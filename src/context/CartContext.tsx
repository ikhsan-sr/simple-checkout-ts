// @ts-nocheck
import React, { useState, createContext, useEffect } from 'react';

import { DATA_CART } from '../consts/dummy';

export const CartContext = createContext<unknown>();

export interface Cart {
  subTotal: number;
  shippingCost: number;
  total: number;
}

const DEFAULT_CART = {
  subTotal: 0,
  shippingCost: 0,
  total: 0,
}

const CartProvider = ({ children }: any) => {
  const [data, setData] = useState(DATA_CART);
  const [cart, setCart] = useState<Cart>(DEFAULT_CART);

  useEffect(() => {
    let total = 0;

    data.map(item => total += (item.price * item.amount))
    setCart({...cart, total});
  }, [data])

	const providerValue = {
		data,
		setData,
    cart,
    setCart,
	};

	return (
		<CartContext.Provider value={providerValue}>{children}</CartContext.Provider>
	);
};

export default CartProvider;