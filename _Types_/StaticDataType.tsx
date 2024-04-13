export type TMenuItems = {
  title: string;
  data: {
    name: string;
    sticker?: string;
    image?: string;
    price: string;
    description?: string;
    additional_information?: string;
    additional_items?: string;
  }[];
};
