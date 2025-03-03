export enum ESort {
  ASC = "asc",
  DESC = "desc",
}

export type TFormProducts = {
  category: string;
  subCategory: string;
  search: string;
  sort?: ESort;
};
