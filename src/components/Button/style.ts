import styled from "styled-components";
import { IButtonProps } from ".";
export const ButtonStyle = styled.button`
    background: ${({background}:IButtonProps) => background};
    color: ${({color}:IButtonProps) => color}; 
    border: ${({border}:IButtonProps) => border}; 
    border-radius: ${({border_radius}:IButtonProps) => `${border_radius}px`}; 
    font-weight: ${({font_weight}:IButtonProps) => font_weight}; 
    font-size: ${({font_size}:IButtonProps) => `${font_size}px`};
    box-sizing: ${({box_sizing}:IButtonProps) => box_sizing};
    padding: ${({padding}:IButtonProps) => padding};
    width: ${({width}:IButtonProps) =>  width};
    height: ${({height}:IButtonProps) => height};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    `