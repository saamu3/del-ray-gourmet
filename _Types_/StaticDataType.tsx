export type TMenuItems = {
    title: string;
    data: {
      name: string;
      sticker?:string;
      image?: string;
      price: string;
      description?: string;
      information?:string;
      para?: string;
    }[];
  };