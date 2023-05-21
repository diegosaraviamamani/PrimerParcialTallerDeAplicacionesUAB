export interface Category {
  id: number;
  name: Name;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

export enum Name {
  CategoryHasBeenUpdated = 'Category has been updated',
  Clothes = 'clothes',
  Electronics = 'Electronics',
  Others = 'Others',
  Shoes = 'Shoes',
}
