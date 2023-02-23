import { Button, Centered, Container, Description, Img, Title } from "./styles";

const ProductOwner = ({ user }: any) => {
  const handleGoToAnnouncements = () => {
    // IR PARA ANUNCIOS DO USUÁRIO
  };

  return (
    <Container>
      <Centered>
        <Img src={user.img} />
        <Title>{user.name}</Title>
        <Description>{user.description}</Description>
        <Button onClick={() => handleGoToAnnouncements()}>
          Ver todos anúncios
        </Button>
      </Centered>
    </Container>
  );
};
export default ProductOwner;
