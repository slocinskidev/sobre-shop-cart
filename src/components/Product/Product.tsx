import Button from 'components/Button';
import React, { FC, useContext } from 'react';
import { ProductProps, ContextType } from 'types';
import './Product.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { ProductsContext } from 'providers/ProductsProvider';

const Product: FC<ProductProps> = (product) => {
  const { addProduct } = useContext(ProductsContext) as ContextType;
  return (
    <section className="product">
      <div className="product__price">{product.price} PLN</div>
      <StaticImage
        src="../../images/bread.png"
        alt={product.name}
        placeholder="blurred"
        layout="fixed"
        width={150}
        height={150}
      />
      <h2 className="product__name">{product.name}</h2>
      <Button text="Do koszyka" handleClick={addProduct(product)} />
    </section>
  );
};

export default Product;
