import React, { FC, useContext } from 'react';
import { BaseComponentProps, ContextType } from 'types';
import './ProductList.scss';
import Product from 'components/Product';
import { ProductsContext } from 'providers/ProductsProvider';

const ProductList: FC<BaseComponentProps> = () => {
  const { products } = useContext(ProductsContext) as ContextType;

  console.log(products);

  const renderProducts = products
    ? products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          price={product.price}
          name={product.name}
          amount={product.amount}
          product={product}
        />
      ))
    : null;

  return <article className="product-list">{renderProducts}</article>;
};

export default ProductList;
