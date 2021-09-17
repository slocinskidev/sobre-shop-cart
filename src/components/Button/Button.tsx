import React, { FC } from 'react';
import { ButtonProps } from 'types';
import './Button.scss';

const Button: FC<ButtonProps> = ({ text, handleClick }) => {
  return (
    <button type="button" className="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
