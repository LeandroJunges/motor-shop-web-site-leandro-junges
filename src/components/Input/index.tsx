import { InputHTMLAttributes } from "react"
import { InputStyle } from "./style"

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    border?: string
    box_sizing?: string
    padding?: string
    border_radius?: number
    width?: number
    background?: string
    color?: string
    description?: string
    register?: any 
}
const Input = ({border, box_sizing, border_radius, padding, width, background, color, description, register,...rest}:IInputProps) => {
    return(
        <InputStyle border={border} border_radius={border_radius} padding={padding} box_sizing={box_sizing} width={width} background={background} color={color} {...register}  {...rest}>
            
        </InputStyle>
    )
}
export default Input