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
    address: {
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
