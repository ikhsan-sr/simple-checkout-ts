interface CounterProps {
  value: number | string;
  onChange(): void;
  onIncrease(): void;
  onDecrease(): void;
}

const Counter = ({onIncrease, onDecrease, value, onChange}: CounterProps) => {
  return (
    <div className="input-group">
      <span className="input-group-btn">
        <button 
          type="button"
          className="btn btn-outline-secondary btn-number btn-sm"
          data-type="minus"
          data-field="quant[1]"
          onClick={onDecrease}
        >
          -
        </button>
      </span>
      
      <input 
        type="text"
        name="quant[1]"
        className="form-control input-number form-control-sm"
        value={value}
        onChange={onChange}
        min="1"
        max="10"
      />
      
      <span className="input-group-btn">
        <button 
          type="button" 
          className="btn btn-outline-secondary btn-number btn-sm" 
          data-type="plus" 
          data-field="quant[1]"
          onClick={onIncrease}
        >
          +
        </button>
      </span>
  </div>
  )
}

export default Counter