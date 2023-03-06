import { FormHTMLAttributes, ReactNode } from "react";
import { Container } from "./style";
import Text from "../Text";
export interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  section1?: string;
  children: ReactNode;
  title: string;
}
const Form = ({ section1, children, title, ...rest }: IFormProps) => {
  return (
    <Container {...rest}>
      <Text
        element="h2"
        family="Lexend"
        weight={500}
        size={24}
        color="black-1"
        description={title}
      />
      <Text
        element="h3"
        family="Inter"
        weight={500}
        size={14}
        color="black-1"
        description={section1}
      />
      {children}
    </Container>
  );
};
export default Form;
