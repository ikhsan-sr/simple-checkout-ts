import Counter from '../atoms/Counter';
import { CartItemType } from '../../consts/dummy';

const CartItem = ({ data } : CartItemType) => {
  const { name, image, type, size, note, price } = data;

  return (
    <div className="container border-bottom">
      <div className="row my-4">
        <div className="col-12 col-md-4 col-sm-12">
          <img src={image} alt={name} className="img-thumbnail rounded" />
        </div>

        <div className="col-12 col-md-8 col-sm-12">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <h5>{name}</h5>
              </div>
              <div className="col-4">
                <Counter />
                {note && `(${note})`}
              </div>
            </div>
          </div>

          <div className="mt-3 ms-2">
            <p>{type.name} {type.type}</p>
            <p>Color: <span>{type.type}</span></p>
            <p>Size: {size}</p>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-8">
                <button type="button" className="btn btn-transparent">Remove Item</button>
                <button type="button" className="btn btn-transparent">Move to Wish List</button>
              </div>
              <div className="col-4 mt-2">
                <h5 className="float-end">${price}</h5>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default CartItem