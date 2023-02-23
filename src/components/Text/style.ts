import styled from "styled-components";
import { ITextProps } from "../../interfaces";

export const TextStyled = styled.p`
font-size: ${({size}:ITextProps) => `${size}px`};
color: ${({color}:ITextProps) => `var(--${color})`};
font-weight: ${({weight}:ITextProps) => `${weight}`};
border: ${({border}:ITextProps) => border ? `${border}` : `none` };
border-radius: 4px;
padding: ${({padding}:ITextProps) => padding ? `${padding}` : `0px` };
text-align: center;
background: ${({back}:ITextProps) => `var(--${back})`};
font-family: ${({family}:ITextProps) => family}
`