import React, { FC } from 'react';
import { BaseComponentProps } from 'types';
import './ProductList.scss';
import Product from 'components/Product';
import { graphql } from 'gatsby';

const ProductList: FC<BaseComponentProps> = () => {
  return (
    <article className="product-list">
      <Product price={100} name="Product name" />
    </article>
  );
};

export default ProductList;
