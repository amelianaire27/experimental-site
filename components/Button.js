import React from 'react';

function Button({ label, onClick }) {
    const handleClick = () => {
        if (onClick) {
          onClick();
        }
      };
  return (
    <button onClick={handleClick} className="my-button">
      {label}
    </button>
  );
}

export default Button;