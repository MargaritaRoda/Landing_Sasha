import React from 'react';

export const Button = ({ children, className, type, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
