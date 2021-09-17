import React, { FC } from 'react';
import { ProductProps, BaseComponentProps, ContextType } from 'types';

export const ProductsContext = React.createContext<ContextType | null>(null);

const ProductsProvider = ({ children }: BaseComponentProps) => {
  const [products, setProducts] = React.useState<ProductProps[]>([
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      amount: 1,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      amount: 1,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 150,
      amount: 1,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 250,
      amount: 1,
    },
  ]);

  const addProduct = (clickedProduct: ProductProps) => {
    setProducts((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedProduct.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedProduct.id
            ? { ...item, amount: item.amount + 1 }
            : item,
        );
      }

      return [...prev, { ...clickedProduct, amount: 1 }];
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
