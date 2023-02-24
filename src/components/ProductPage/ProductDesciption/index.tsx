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
  const handleBuy = () => {
    //COMPRAR ?
  };

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
                <Button onClick={() => handleBuy()}>Comprar</Button>
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
