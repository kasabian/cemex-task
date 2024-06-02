export interface IFilterOption {
  filter: string;
  value: unknown;
}

export interface IFilterOptions {
  [key: string]: IFilterOption[];
}
