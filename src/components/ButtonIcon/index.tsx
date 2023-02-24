import { IButtonIconProps } from "../../interfaces"
import { Container } from "./style"

const ButtonIcon = ({children, background, border, border_radius, color, ...rest}:IButtonIconProps) => {
    return(
        <Container background={background} border={border} border_radius={border_radius} color={color} {...rest}>
            {children}
        </Container>
    )
}
export default ButtonIcon