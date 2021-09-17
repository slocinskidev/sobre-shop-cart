export const calculateTotalPrice = (product: any) =>
  product.reduce(
    (acc: any, product: any) => acc + product.amount * product.price,
    0,
  );
