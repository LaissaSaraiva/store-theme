import React from "react";
import { ProductProps } from "./interfaces";
import { ProductButton } from "./ProductButton";
import { ProductImage } from "./ProductImage";
import { ProductName } from "./ProductName";
import { ProductPrice } from "./ProductPrice";
import { ProductRatings } from "./ProductRatings";
import { ProductReferenceCode } from "./ProductReferenceCode";
import { ProductWishlist } from "./ProductWishlist";
import { ProductWrapper } from "./ProductWrapper";
import { schema } from "./schema";

const Product: StorefrontFunctionComponent<ProductProps> = (props) => {
  return (
    <ProductWrapper>
      <ProductImage src={props.productImage} />
      <ProductRatings productRatings={props.productRatings} />
      <ProductName productName={props.productName} />
      <ProductReferenceCode productReferenceCode={props.productReferenceCode} />
      <ProductPrice price={props.productPrice} />
      <ProductWishlist src={props.productWishlist} />
      <ProductButton>{props.children}</ProductButton>
    </ProductWrapper>
  );
};

export default Product;

Product.schema = schema;
