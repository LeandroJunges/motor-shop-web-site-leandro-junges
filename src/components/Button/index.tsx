import { ButtonHTMLAttributes, ReactNode } from "react"
import { ButtonStyle } from "./style"

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    description?: string
    background: string
    color: string
    border: string
    border_radius?: number
    font_weight?: number
    font_size?: number
    box_sizing?: string
    padding?: string
    width?: string
    height?: string
    register?: any
}

const Button = ({background, border, color, description, border_radius, font_size, font_weight, box_sizing, height,padding, width,register,  ...rest}:IButtonProps) => {
    return(
        <ButtonStyle background={background} border={border} color={color} border_radius={border_radius} font_size={font_size} font_weight={font_weight} box_sizing={box_sizing} height={height} width={width} register={{...register}} padding={padding}{...rest}>
            {description}
        </ButtonStyle>
    )
}
export default Button