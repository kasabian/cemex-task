export interface IProductLine {
  name: string;
  key: string;
}

export interface IFilterData {
  status: string[];
  productLines: IProductLine;
  from: Date;
  to: Date;
  searchOrderNumber: string;
}
