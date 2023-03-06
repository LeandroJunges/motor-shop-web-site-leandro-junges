import { IAnnouncementsData } from "../../context/AnnouncementContext";

export interface IProps {
  product: IAnnouncementsData;
  isOwner?: boolean;
}

export interface IProduct {
  actualBid: string;
  imgs: Array<string>;
  initialBid: string;
  isAuction: boolean;
  isSold: boolean;
  vehicleType: "car" | "bike";
  id: string;
  title: string;
  description: string;
  user: IUser;
  mileage: number;
  year: string;
  price: number | undefined;
  imgMain: string;
}

export interface IUser {
  cellphone: string;
  cpf: string;
  dateOfBirth: string;
  description: string;
  email: string;
  id: string;
  isActive: Boolean;
  isAdvertiser: boolean;
  name: string;
  img?: string;
}
