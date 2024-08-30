export interface ProductProps {
  productImage?: string;
  productRatings?: string;
  productName?: string;
  productReferenceCode?: string;
  productPrice?: string;
  children?: React.ReactNode;
}

export interface ProductPriceProps {
  price?: string;
}

export interface ProductImageProps {
  src?: string;
}
