import {
  Container,
  ContainerComment,
  DescriptionWeighted,
  Description,
  Img,
  NameAndDate,
  Title,
  TitleDiv,
} from "./styles";
import { GiPlainCircle } from "react-icons/gi";
export const CommentContent = ({ comment }: any) => {
  const now = new Date().getDate();
  const date = new Date(comment.createdAt).getDate();
  const days = now - date;

  const handleRedirectUserPage = () => {
    //redirecionar pra pagina de usuario
  };

  return (
    <ContainerComment>
      <NameAndDate onClick={() => handleRedirectUserPage()}>
        <Img src={comment.user.img} />
        <DescriptionWeighted color="var(--grey-1)">
          {comment.user.name}
        </DescriptionWeighted>
        <GiPlainCircle fontSize="6px" color="var(--grey-3)" />
        <Description color="var(--grey-3)">
          {days < 1 ? "Hoje" : `há ${days} dias`}
        </Description>
      </NameAndDate>
      <Description color="var(--grey-3)">{comment.description}</Description>
    </ContainerComment>
  );
};

export const ProductComments = ({ comments }: any) => {
  return (
    <Container>
      <TitleDiv>
        <Title>Comentários</Title>
      </TitleDiv>
      {comments.map((c: any) => {
        return <CommentContent key={c.id} comment={c} />;
      })}
    </Container>
  );
};
