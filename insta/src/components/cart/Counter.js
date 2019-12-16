import React from 'react';

const Counter = ({ onPlus, onMinus, id }) => {
  return (
    <div className="Pkbci">
      <button onClick={() => onPlus(id)} className="sqdOP L3NKy y3zKF" type="button" style={{ marginBottom: "2px" }}>+</button>
      <button onClick={() => onMinus(id)} className="sqdOP L3NKy y3zKF" type="button" style={{ marginTop: "2px" }}>-</button>
    </div>
  );
};

export default Counter;
