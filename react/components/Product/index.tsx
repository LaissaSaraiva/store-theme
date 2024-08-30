import React from "react";
import { ProductName } from "./ProductName";
import { ProductRatings } from "./ProductRatings";
import { ProductWrapper } from "./ProductWrapper";
import { schema } from "./schema";
export interface ProductProps {
  productImage?: string;
  productRatings?: string;
  productName?: string;
  productReferenceCode?: string;
  productPrice?: string;
  children?: React.ReactNode;
}

const Product: StorefrontFunctionComponent<ProductProps> = (props) => {
  return (
    <ProductWrapper>
      <h1>Inicia componente</h1>
      <ProductRatings productRatings={props.productRatings} />
      <ProductName productName={props.productName} />
    </ProductWrapper>
  );
};

export default Product;

Product.schema = schema;
