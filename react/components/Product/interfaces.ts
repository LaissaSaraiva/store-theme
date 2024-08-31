export interface ProductProps {
  productImage?: string;
  productRatings?: string;
  productName?: string;
  productReferenceCode?: string;
  productPrice?: string;
  productWishlist?: string;
  children?: React.ReactNode;
}

export interface ProductPriceProps {
  price?: string;
}

export interface ProductImageProps {
  src?: string;
}

export interface ProductButtonProps {
  children?: React.ReactNode;
  onButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
