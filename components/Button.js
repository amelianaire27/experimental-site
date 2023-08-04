import React from 'react';

function Button({ label, onClick }) {
  return (
    <button onClick={onClick} className="my-button">
      {label}
    </button>
  );
}

export default Button;