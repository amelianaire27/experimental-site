import React from 'react';
import { init } from 'commandbar';

function Button({ label, onClick }) {
    const handleClick = () => {
        if (onClick) {
            window.CommandBar.trackEvent('buttonClicked', {})
        }
      };
  return (
    <button onClick={handleClick} className="my-button">
      {label}
    </button>
  );
}

export default Button;