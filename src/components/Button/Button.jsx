import React from 'react';

export const Button = ({ children, className, type, onClick, active }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
