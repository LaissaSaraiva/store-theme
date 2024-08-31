export interface ProductProps {
  productImage?: string;
  productRatings?: string;
  productName?: string;
  productReferenceCode?: string;
  productPrice?: string;
  productWishlist?: string;
  children?: React.ReactNode;
  productGallery?: {
    original?: string;
    thumbnail?: string;
  }[];
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

export interface ProductImageGalleryProps {
  items: {
    original?: string;
    thumbnail?: string;
  }[];
}
