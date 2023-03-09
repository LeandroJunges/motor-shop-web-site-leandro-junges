import { Button, Centered, Container, Description, Img, Title } from "./styles";
import { useNavigate } from "react-router-dom";

const ProductOwner = ({ user }: any) => {
  const nav = useNavigate();
  const handleGoToAnnouncements = () => {
    nav(`/advertiser/${user.id}`);
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
