export interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  price: string;
  promotionalPrice: string;
  promotionalPriceStart: string;
  promotionalPriceEnd: string;
  status: string;
  [key: string]: string;
}
