import React from "react";
import { useCssHandles } from "vtex.css-handles";
import "./../../styles/css/Product/Product.css";
import { ProductProps } from "./interfaces";
import { ProductButton } from "./ProductButton";
import { ProductImage } from "./ProductImage";
import { ProductImageGallery } from "./ProductImageGallery";
import { ProductName } from "./ProductName";
import { ProductPrice } from "./ProductPrice";
import { ProductRatings } from "./ProductRatings";
import { ProductReferenceCode } from "./ProductReferenceCode";
import { ProductWishlist } from "./ProductWishlist";
import { ProductWrapper } from "./ProductWrapper";
import { schema } from "./schema";

const PRODUCT_HANDLES = ["productDetails"] as const;

const handleBuyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  alert("Produto adicionado ao Carrinho!");
};

const Product: StorefrontFunctionComponent<ProductProps> = (props) => {
  const { handles } = useCssHandles(PRODUCT_HANDLES);
  return (
    <ProductWrapper>
      {props.productGallery ? (
        <ProductImageGallery items={props.productGallery} />
      ) : (
        <ProductImage src={props.productImage} />
      )}
      <div className={handles.productDetails}>
        <ProductRatings productRatings={props.productRatings} />
        <ProductName productName={props.productName} />
        <ProductReferenceCode
          productReferenceCode={props.productReferenceCode}
        />
        <ProductPrice price={props.productPrice} />
        <ProductWishlist src={props.productWishlist} />
        <ProductButton onButtonClick={handleBuyClick}>
          {props.children}
        </ProductButton>
      </div>
    </ProductWrapper>
  );
};

export default Product;

Product.schema = schema;
