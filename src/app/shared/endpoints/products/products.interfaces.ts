export interface IProduct {
  status: string;
  orderNumber: number;
  productLine: string;
  productName: string;
  quantity: {
    quantity: number;
    unit: string;
  };
  dateRequested: number;
}

export type TProductKeys = keyof IProduct;
