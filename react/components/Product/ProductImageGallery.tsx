import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ProductImageGalleryProps } from "./interfaces";

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  items,
}) => {
  return (
    <div>
      <ImageGallery items={items} />
    </div>
  );
};

export default ImageGallery;
