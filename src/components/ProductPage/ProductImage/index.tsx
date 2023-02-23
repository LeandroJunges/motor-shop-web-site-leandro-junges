import { Title } from "../ProductDesciption/styles";
import {
  Container,
  ImgDiv,
  ImgsContainer,
  TitleDiv,
  Img,
  Centered,
} from "./styles";

const ProductImage = ({ imgs }: any) => {
  return (
    <Container>
      <Centered>
        <TitleDiv>
          <Title>Fotos</Title>
        </TitleDiv>
        <ImgsContainer>
          {imgs.map((i: any) => {
            return (
              <ImgDiv key={i.id}>
                <Img src={i.link} />
              </ImgDiv>
            );
          })}
        </ImgsContainer>
      </Centered>
    </Container>
  );
};
export default ProductImage;
