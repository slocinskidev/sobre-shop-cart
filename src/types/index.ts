import { ReactNode } from 'react';

export interface BaseComponentProps {
  children?: ReactNode;
}

type InputSearchType = 'text';
export interface InputSearchProps {
  placeholder?: string;
  ref?: HTMLInputElement;
  type: InputSearchType;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ProductProps {
  id: number;
  price: number;
  name: string;
  amount: number;
}

export interface ButtonProps {
  text: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children?: ReactNode;
  type?: 'button' | 'submit';
  ariaLabel?: string;
}

export type ContextType = {
  products: ProductProps[];
  addProduct: (product: ProductProps) => void;
};
