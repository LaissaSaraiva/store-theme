import React from "react";
import { ProductProps } from "./interfaces";
import { ProductImage } from "./ProductImage";
import { ProductName } from "./ProductName";
import { ProductPrice } from "./ProductPrice";
import { ProductRatings } from "./ProductRatings";
import { ProductReferenceCode } from "./ProductReferenceCode";
import { ProductWrapper } from "./ProductWrapper";
import { schema } from "./schema";

const Product: StorefrontFunctionComponent<ProductProps> = (props) => {
  return (
    <ProductWrapper>
      <h1>Inicia componente</h1>
      <ProductRatings productRatings={props.productRatings} />
      <ProductName productName={props.productName} />
      <ProductReferenceCode productReferenceCode={props.productReferenceCode} />
      <ProductPrice price={props.productPrice} />
      <ProductImage src={props.productImage} />
    </ProductWrapper>
  );
};

export default Product;

Product.schema = schema;
