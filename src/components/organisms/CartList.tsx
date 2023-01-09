// @ts-nocheck
import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';
import { DATA_CART } from '../../consts/dummy';
import CartItem from '../molecules/CartItem';

const CartList = () => {
  const { data } = useContext(CartContext);

  return (
    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
      <h6>Cart {`(${data.length} item)`}</h6>
      
      {DATA_CART.map((item, index) => (
        <CartItem 
          data={item}
          key={index}
          index={index}
        />
      ))}
    </div>
  )
}

export default CartList