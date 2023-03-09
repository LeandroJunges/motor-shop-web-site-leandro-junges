import {
  Container,
  ContainerComment,
  DescriptionWeighted,
  Description,
  Img,
  NameAndDate,
  Title,
  TitleDiv,
  EditAndDeleteDiv,
  Input,
  Button,
  ButtonDiv,
  ButtonC,
} from "./styles";
import { CommentsContext } from "../../../context/CommentsContext";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { GiPlainCircle } from "react-icons/gi";
import { useContext, useState } from "react";
export const CommentContent = ({ announcement, comment }: any) => {
  const [description, setDescription] = useState("");
  const [openEdit, setOpenEdit] = useState(false);
  const { editComment, deleteComment } = useContext(CommentsContext);
  const userId = localStorage.getItem("@motorshop: userId");
  const now = new Date().getDate();
  const date = new Date(comment.createdAt).getDate();
  const days = now - date;

  const handleEdit = () => {
    editComment(comment.id, description, announcement.id);
    setOpenEdit(false);
  };

  const handleDelete = () => {
    deleteComment(comment.id, announcement.id);
  };

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
      {openEdit ? (
        <>
          <Input
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Edite seu comentário"
          />
          <ButtonDiv>
            <Button onClick={() => handleEdit()}>Editar</Button>
            <ButtonC onClick={() => setOpenEdit(false)}>Cancelar</ButtonC>
          </ButtonDiv>
        </>
      ) : (
        <Description color="var(--grey-3)">{comment.description}</Description>
      )}
      {comment.user.id === userId && openEdit === false && (
        <EditAndDeleteDiv>
          <AiFillEdit
            cursor={"pointer"}
            onClick={() => setOpenEdit(true)}
            color="#00FF00"
          />
          <BsFillTrashFill
            cursor={"pointer"}
            onClick={() => handleDelete()}
            color="#FF0009"
          />
        </EditAndDeleteDiv>
      )}
    </ContainerComment>
  );
};

export const ProductComments = ({ announcement, comments }: any) => {
  return (
    <Container>
      <TitleDiv>
        <Title>Comentários</Title>
      </TitleDiv>
      {comments.map((c: any) => {
        return (
          <CommentContent announcement={announcement} key={c.id} comment={c} />
        );
      })}
    </Container>
  );
};
