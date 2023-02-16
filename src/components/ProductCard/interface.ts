export interface IProduct {
  id: string;
  title: string;
  description: string;
  user: IUser;
  mileage: number;
  year: number;
  price: number;
  img: string;
}

export interface IUser {
  name: string;
  img?: string;
}
