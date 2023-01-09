const TotalAmount = () => {
  return (
    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
      <h6>The total amount of</h6>

      <div className="container">
        <div className="row">
          <div className="col-6">Temporary amount</div>
          <div className="col-6">
            <div className="float-end">$99</div>
          </div>

          <div className="col-6">Shipping</div>
          <div className="col-6">
            <div className="float-end">$99</div>
          </div>

          <hr className="my-3"/>

          <div className="col-6">The total amount of</div>
            <div className="col-6">
              <div className="float-end">$99</div>
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