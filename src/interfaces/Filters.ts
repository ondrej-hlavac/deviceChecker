
export interface IFiltersOptions {
  os: string[];
  vendor: string[];
  onStock?: boolean;
}

export interface IFilters {
  os: string;
  vendor: string;
  onStock: boolean;
}