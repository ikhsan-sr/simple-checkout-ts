const Counter = () => {
  return (
    <div className="input-group">
      <span className="input-group-btn">
        <button type="button" className="btn btn-primary btn-number btn-sm" data-type="minus" data-field="quant[1]">
          -
        </button>
      </span>
      <input type="text" name="quant[1]" className="form-control input-number form-control-sm" value="1" min="1" max="10" />
      <span className="input-group-btn">
        <button type="button" className="btn btn-primary btn-number btn-sm" data-type="plus" data-field="quant[1]">
          +
        </button>
      </span>
  </div>
  )
}

export default Counter