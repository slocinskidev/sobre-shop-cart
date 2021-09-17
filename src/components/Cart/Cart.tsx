import React, { FC } from 'react';
import { BaseComponentProps } from 'types';
import './Cart.scss';

const Cart: FC<BaseComponentProps> = () => {
  const totalPrice = 2222;
  return (
    <aside className="cart">
      <div>Koszyk</div>
      <div>Cena: {totalPrice}</div>
      <div>Twój koszyk</div>
      <div>
        <p>produkt_1</p>
        <p>256 zł</p>
      </div>
      <div>Kod rabatowy</div>
    </aside>
  );
};

export default Cart;
