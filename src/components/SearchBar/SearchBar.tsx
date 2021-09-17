import InputSearch from 'components/InputSearch';
import React, { FC } from 'react';
import { BaseComponentProps } from 'types';
import './SearchBar.scss';

const SearchBar: FC<BaseComponentProps> = () => {
  const inputValue = () => {
    console.log('Search change');
  };
  return (
    <header className="search-bar">
      <InputSearch
        type="text"
        handleOnChange={inputValue}
        placeholder={'Wyszukaj produkt'}
      />
    </header>
  );
};

export default SearchBar;
