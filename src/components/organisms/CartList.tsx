import useCart from '../../hooks/useCart';
import CartItem from '../molecules/CartItem';

const CartList = () => {
  const { data } = useCart();

  return (
    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
      <h6>Cart {`(${data.length} item)`}</h6>
      
      {data.map((item, index) => (
        <CartItem data={item} key={index} />
      ))}
    </div>
  )
}

export default CartList