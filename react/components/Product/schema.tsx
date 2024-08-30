export const schema = {
  title: "Product",
  type: "object",
  properties: {
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
  },
};
