import { useState } from 'react';
import { DATA_CART } from '../consts/dummy';

const useCart = () => {
  const [data, setData] = useState(DATA_CART);
  const [shippingCost, setShippingCost] = useState<number>(0);
  
  return { data, setData, shippingCost, setShippingCost };
};

export default useCart;
