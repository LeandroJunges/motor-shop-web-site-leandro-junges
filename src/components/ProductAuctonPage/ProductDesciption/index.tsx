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
  const { userAdvertiser, getUserAdivertiser } = useContext(UserContext);
  useEffect(() => {
    getUserAdivertiser(userId!);
  }, []);

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
                <Price>
                  Lance atual:{" "}
                  {Number(product.actualBid).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </Price>
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
                  {Number(product.initialBid).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </Price>
              </StatsDiv>
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
