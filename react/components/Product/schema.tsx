export const schema = {
  title: "Product",
  type: "object",
  properties: {
    productImage: {
      title: "Imagem do Produto",
      type: "string",
      widget: {
        "ui:widget": "image-uploader",
      },
    },
    productRatings: {
      title: "Estrelas de avaliação",
      type: "string",
      widget: {
        "ui:widget": "image-uploader",
      },
    },
    productName: {
      title: "Nome do Produto",
      type: "string",
    },
    productReferenceCode: {
      title: "Código de Referência do Produto",
      type: "string",
    },
    productPrice: {
      title: "Preço do Produto",
      description: "Escreva como String",
      type: "string",
    },
    productWishlist: {
      title: "Ícone de Wishlist",
      type: "string",
      widget: {
        "ui:widget": "image-uploader",
      },
    },
    productGallery: {
      title: "Galeria de Imagens",
      type: "array",
      items: {
        title: "Itens",
        type: "object",
        properties: {
          original: {
            title: "Imagem Original",
            type: "string",
            widget: {
              "ui:widget": "image-uploader",
            },
          },
          thumbnail: {
            title: "Thumbnail da Imagem",
            type: "string",
            widget: {
              "ui:widget": "image-uploader",
            },
          },
        },
      },
    },
  },
};
