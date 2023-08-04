import React from 'react';

function Button({ label, buttonClicked }) {
  return (
    <button onClick={buttonClicked} className="my-button">
      {label}
    </button>
  );
}

export default Button;