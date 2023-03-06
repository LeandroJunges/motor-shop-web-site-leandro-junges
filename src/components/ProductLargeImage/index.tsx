import { MdClose } from "react-icons/md";
import {
  Backdrop,
  Centered,
  Container,
  Img,
  ImgDiv,
  Title,
  Upperdiv,
} from "./styles";

interface IProps {
  link: string;
  setOpenImageLarge: any;
}

const ProductLargeImage = ({ link, setOpenImageLarge }: IProps) => {
  return (
    <Backdrop>
      <Container>
        <Centered>
          <Upperdiv>
            <Title>Imagem do veiculo</Title>
            <MdClose
              fontSize="20px"
              style={{ cursor: "pointer" }}
              color="#ADB5BD"
              onClick={() => setOpenImageLarge(false)}
            />
          </Upperdiv>
          <ImgDiv>
            <Img src={link} />
          </ImgDiv>
        </Centered>
      </Container>
    </Backdrop>
  );
};

export default ProductLargeImage;
