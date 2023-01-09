// @ts-nocheck
import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

const TotalAmount = () => {
  const { cart }= useContext(CartContext);

  return (
    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
      <h6>The total amount of</h6>

      <div className="container text-secondary">
        <div className="row">
          <div className="col-6">Temporary amount</div>
          <div className="col-6">
            <div className="float-end">${cart.total.toFixed(2)}</div>
          </div>

          <div className="col-6">Shipping</div>
          <div className="col-6">
            <div className="float-end">${cart.shippingCost}</div>
          </div>

          <hr className="my-3"/>

          <div className="col-6 text-dark h6 mt-1">The total amount of</div>
            <div className="col-6">
              <div className="float-end">${cart.total.toFixed(2)}</div>
            </div>
          </div>
      </div>

      <div className="d-grid gap-2 mt-4">
        <button className="btn btn-primary" type="button">GO TO CHECKOUT</button>
      </div>
    </div>
  )
}

export default TotalAmount