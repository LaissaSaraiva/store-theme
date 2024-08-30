import React from "react";
import { ProductName } from "./ProductName";
import { ProductWrapper } from "./ProductWrapper";
import { schema } from "./schema";
export interface ProductProps {
  productImage?: string;
  ratings?: string;
  productName?: string;
  productReferenceCode?: string;
  productPrice?: string;
  children?: React.ReactNode;
}

const Product: StorefrontFunctionComponent<ProductProps> = (props) => {
  return (
    <ProductWrapper>
      <h1>Inicia componente</h1>
      <ProductName productName={props.productName} />
    </ProductWrapper>
  );
};

export default Product;

Product.schema = schema;
