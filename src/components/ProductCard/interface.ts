export interface IProps {
  product: IProduct;
  isOwner?: boolean;
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  user: IUser;
  mileage: number;
  year: number;
  price: number;
  img: string;
  isActive: boolean;
}

export interface IUser {
  name: string;
  img?: string;
}
