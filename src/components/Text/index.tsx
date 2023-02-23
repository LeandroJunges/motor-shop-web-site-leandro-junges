import { ITextProps } from "../../interfaces"
import { TextStyled } from "./style"


const Text = ({color, description, element, weight, size, padding, border, back, family,...rest}:ITextProps) => {

    return(
        <TextStyled as={element} color={color} size={size} weight={weight} padding={padding} border={border} back={back} family={family} {...rest}>
            {description}
        </TextStyled>
    )
}
export default Text