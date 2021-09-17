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
