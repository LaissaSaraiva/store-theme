import React from "react";
import { ProductWrapper } from "./ProductWrapper";

interface ProductProps {
  productImage?: string;
  ratings?: string;
  productName?: string;
  productReferenceCode?: string;
  productPrice?: string;
  children?: React.ReactNode;
}

const Product: StorefrontFunctionComponent<ProductProps> = () => {
  return (
    <ProductWrapper>
      <h1>Inicia componente</h1>
    </ProductWrapper>
  );
};

export default Product;
