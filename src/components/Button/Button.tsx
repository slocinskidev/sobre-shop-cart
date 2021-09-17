import React, { FC } from 'react';
import { ButtonProps } from 'types';
import './Button.scss';

const Button: FC<ButtonProps> = ({ text }) => {
  const handleButtonClick = () => {
    console.log('click');
  };

  return (
    <button type="button" className="button" onClick={handleButtonClick}>
      {text}
    </button>
  );
};

export default Button;
