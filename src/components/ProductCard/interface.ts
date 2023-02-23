export interface IProduct {
  id: string;
  title: string;
  description: string;
  user: IUser;
  mileage: number;
  year: string;
  price: number | undefined
  imgMain: string;
}

export interface IUser {
  name: string;
  img?: string;
}
