import { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import {
  BottomDiv,
  BottomDivCentered,
  Button,
  ButtonDiv,
  Container,
  Description,
  DescriptionContainer,
  DescriptionContainerCentered,
  Img,
  ImgDiv,
  Price,
  Stat,
  StatsDiv,
  Title,
  TitleDiv,
  UpperDiv,
  UpperStats,
  UpperStatsInfo,
} from "./styles";

const ProductDescription = ({ product }: any) => {
  const {userAdvertiser, getUserAdivertiser} = useContext(UserContext)
  useEffect(()=>{
    getUserAdivertiser(userId!)
  },[])
  
  const { userId } = useParams();
  return (
    <>
      <Container>
        <UpperDiv>
          <ImgDiv>
            <Img src={product.imgMain} alt="productImage" />
          </ImgDiv>
          <DescriptionContainer>
            <DescriptionContainerCentered>
              <TitleDiv>
                <Title>{product.title}</Title>
              </TitleDiv>
              <StatsDiv>
                <UpperStats>
                  <UpperStatsInfo>
                    <Stat>{product.year}</Stat>
                  </UpperStatsInfo>
                  <UpperStatsInfo>
                    <Stat>
                      {product.mileage}
                      {" KM"}
                    </Stat>
                  </UpperStatsInfo>
                </UpperStats>
                <Price>
                  {Number(product.price).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </Price>
              </StatsDiv>
              <ButtonDiv>
                <Button href={`https://api.whatsapp.com/send?phone=+55+${userAdvertiser?.cellphone}&text=Ol%C3%A1%2C%20venho%20por%20meio%20da%20sua%20p%C3%A1gina%20de%20produto%2C%20gostaria%20de%20comprar%20seu%20carro%20ou%20moto`} /*target="_blank"*/ > Comprar </Button>
              </ButtonDiv>
            </DescriptionContainerCentered>
          </DescriptionContainer>
        </UpperDiv>
        <BottomDiv>
          <BottomDivCentered>
            <Title>Descrição</Title>
            <Description>{product.description}</Description>
          </BottomDivCentered>
        </BottomDiv>
      </Container>
    </>
  );
};
export default ProductDescription;
