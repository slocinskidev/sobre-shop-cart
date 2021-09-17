import Button from 'components/Button';
import React, { FC } from 'react';
import { ProductProps } from 'types';
import './Product.scss';
import { StaticImage } from 'gatsby-plugin-image';

const Product: FC<ProductProps> = ({ price, name }) => {
  return (
    <section className="product">
      <div className="product__price">{price} PLN</div>
      <StaticImage
        src="../../images/bread.png"
        alt={name}
        placeholder="blurred"
        layout="fixed"
        width={150}
        height={150}
      />
      <h2 className="product__name">{name}</h2>
      <Button text="Do koszyka" />
    </section>
  );
};

export default Product;
