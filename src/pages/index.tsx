import React from 'react';
import { PageProps } from 'gatsby';

import Title from 'components/Title';
import Layout from 'layouts/Layout';
import SearchBar from 'components/SearchBar/SearchBar';

const Home: React.FC<PageProps> = () => (
  <Layout>
    <SearchBar />
    <Title>Hello TypeScript!</Title>
  </Layout>
);

export default Home;
