import React from 'react';
import { PageProps } from 'gatsby';

import Title from 'components/Title';

const Home: React.FC<PageProps> = () => (
  <main>
    <Title>Hello TypeScript!</Title>
  </main>
);

export default Home;
