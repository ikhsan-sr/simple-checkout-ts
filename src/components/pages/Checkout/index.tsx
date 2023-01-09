import CartList from '../../organisms/CartList';
import TotalAmount from '../../organisms/TotalAmount';

import CartProvider from '../../../context/CartContext';
import Discount from '../../organisms/Discount';

const Checkout = () => {
  return (
    <CartProvider>
      <h2 className="text-center my-5">Shopping Cart</h2>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-sm-12">
            <CartList />
          </div>
          <div className="col-12 col-md-4 col-sm-12">
            <TotalAmount />
            <Discount />
          </div>
        </div>
      </div>
    </CartProvider>
  )
}

export default Checkout