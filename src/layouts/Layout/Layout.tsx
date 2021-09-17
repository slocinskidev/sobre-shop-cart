import React, { FC } from 'react';
import { BaseComponentProps } from 'types';
import 'normalize.css';

import './styles.scss';

const Layout: FC<BaseComponentProps> = ({ children }) => (
  <main className="main">{children}</main>
);

export default Layout;
