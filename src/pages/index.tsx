import React from 'react';
import { PageProps } from 'gatsby';
import Layout from 'layouts/Layout';
import SearchBar from 'components/SearchBar';
import ProductList from 'components/ProductList';

const Home: React.FC<PageProps> = () => (
  <Layout>
    <SearchBar />
    <ProductList />
  </Layout>
);

export default Home;
