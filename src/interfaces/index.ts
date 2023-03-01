import { ReactNode, ButtonHTMLAttributes, HtmlHTMLAttributes } from "react";
export interface IChildren {
  children: ReactNode;
}
//BUTTON ICON===========================================================================
export interface IButtonIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  background: string;
  color?: string;
  border?: string;
  border_radius?: number;
  children: ReactNode;
}
// TEXT================================================================================================
export interface ITextProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
  description?: string;
  element?: "p" | "h1" | "h2" | "h3" | "h4" | "span" | "label";
  size: number;
  color: string;
  weight: number;
  border?: string;
  padding?: string;
  back?: string;
  family?: string;
}

export interface IImgs {
  img1?: string;
  img2?: string;
  img3?: string;
  img4?: string;
  img5?: string;
  img6?: string;
}

export interface IAnnouncementCreate {
  isAuction: boolean;
  title: string;
  year: number | string;
  mileage: number;
  vehicleType: string;
  description: string;
  imgMain: string;
  initialBid?: number;
  price?: number;
  imgs?: IImgs;
}

export interface IAnnouncement {
  id: string;
  isAuction: boolean;
  title: string;
  year: number | string;
  mileage: number;
  vehicleType: string;
  description: string;
  imgMain: string;
  initialBid?: number;
  actualBid?: number;
  isSold: boolean;
  price?: number;
  imgs?: IImg[];
  user: IUserResponse["user"];
}

export interface IImg {
  id: string;
  link: string;
}

export interface IUserResponse {
  user: {
    id: string;
    name: string;
    email: string;
    cpf: string;
    cellphone: string;
    description: string;
    dateOfBirth: Date;
    isAdvertiser?: boolean;
    isActive?: boolean;
    img?: string;
    address?: {
      id: string;
      cep: string;
      state: string;
      city: string;
      street: string;
      number: string;
      complement?: string;
    };
  };
  token: string;
}

export interface IAnnouncementForProductCard {
  id: string;
  isAuction: boolean;
  title: string;
  year: string;
  mileage: number;
  vehicleType: string;
  description: string;
  imgMain: string;
  initialBid: number;
  price: number;
  isActive: boolean;
  actualBid: number;
  isSold: boolean;
  user: IUserResponse["user"];
}
