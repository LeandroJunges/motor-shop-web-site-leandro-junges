import styled from "styled-components";
import { IInputProps } from ".";

export const InputStyle = styled.input`

border-radius: ${({border_radius}:IInputProps) => `${border_radius}px`};
padding: ${({padding}:IInputProps) => padding};
border: ${({border}:IInputProps) => border};
box-sizing: ${({box_sizing}:IInputProps) => box_sizing};
height: 3rem;
width: ${({width}:IInputProps) => width ? `${width}` : "90%" };
background: ${({background}:IInputProps) => background};
color: ${({color}:IInputProps) => color}

`