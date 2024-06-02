import { IProduct } from './products.interfaces';

export const PRODUCT_MOCK_DATA: IProduct[] = [
  {
    status: 'In Progress',
    orderNumber: 3301,
    productLine: 'Ready-Mix',
    productName: '1-200-2-C-28',
    quantity: {
      quantity: 12,
      unit: 'm3',
    },
    dateRequested: 1717624800023,
  },
  {
    status: 'Pending',
    orderNumber: 3305,
    productLine: 'Cement',
    productName: 'Gris CPC 30 R Monterrey Extra 50kg',
    quantity: {
      quantity: 10,
      unit: 'TN',
    },
    dateRequested: 1717143444038,
  },
  {
    status: 'Pending',
    orderNumber: 3290,
    productLine: 'Aggregates',
    productName: 'Arena Triturada Caliza Malla 4',
    quantity: {
      quantity: 2,
      unit: 'TN',
    },
    dateRequested: 1716581149381,
  },
  {
    status: 'Completed',
    orderNumber: 3184,
    productLine: 'Aggregates',
    productName: 'Arena Triturada Caliza Malla 4',
    quantity: {
      quantity: 5,
      unit: 'TN',
    },
    dateRequested: 1716588000232,
  },
  {
    status: 'Completed',
    orderNumber: 3305,
    productLine: 'Cement',
    productName: 'Gris CPC 30 R Monterrey Extra 50kg',
    quantity: {
      quantity: 12,
      unit: 'TN',
    },
    dateRequested: 1717143444038,
  },
];
