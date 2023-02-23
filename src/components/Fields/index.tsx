import Text from "../Text";
import { ITextProps } from "../../interfaces";
import Input from "../Input";
import { Container } from "./style";
export interface IFieldsProps extends ITextProps {
    placeholder: string
    type?: string
    register?: any
}
const Fields = ({description, color, size, weight, placeholder, register, type}:IFieldsProps) => {
    return(
        <Container>
            <Text element="label" description={description} color={color} size={size} weight={weight}/>
            <Input placeholder={placeholder} border="1.5px solid var(--grey-7)" border_radius={4} padding="0px 16px" type={type} register ={{...register}} />
        </Container>
    )
}
export default Fields