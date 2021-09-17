import React, { FC } from 'react';
import { BaseComponentProps } from 'types';
import Cart from 'components/Cart';
import ProductsProvider from 'providers/ProductsProvider';

import 'normalize.css';

import './styles.scss';

const Layout: FC<BaseComponentProps> = ({ children }) => (
  <ProductsProvider>
    <main className="main">
      <div className="main__wrapper">{children}</div>
      <Cart />
    </main>
  </ProductsProvider>
);

export default Layout;
