import styled from "styled-components";
import { IButtonIconProps } from "../../interfaces";

export const Container = styled.button`
background: ${({background}:IButtonIconProps) => background};
color: ${({color}:IButtonIconProps) => color};
border: ${({border}:IButtonIconProps) => border};
border-radius: ${({border_radius}:IButtonIconProps) => `${border_radius}px`};

`