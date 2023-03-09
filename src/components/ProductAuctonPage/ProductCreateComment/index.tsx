import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext";
import {
  ASugestionDiv,
  Button,
  ButtonGray,
  Centered,
  Container,
  DescriptionWeighted,
  Img,
  Input,
  InputAndButtonDiv,
  SugestionsDiv,
  Text,
  UserDiv,
} from "./styles";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services";
import { CommentsContext } from "../../../context/CommentsContext";

interface IProps {
  announcementId: string;
}

const ProductCreateComment = ({ announcementId }: IProps) => {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const { user } = useContext(UserContext);
  const { createComment } = useContext(CommentsContext);

  const handleRedirect = () => {
    //redirecionar para login
    navigate("/login");
  };

  const handleSubmitComment = async () => {
    createComment(announcementId, description);
  };

  return (
    <>
      {user ? (
        <>
          <Container>
            <Centered>
              <UserDiv>
                <Img src={user.img} />
                <DescriptionWeighted>{user.name}</DescriptionWeighted>
              </UserDiv>
              <InputAndButtonDiv>
                <Input
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  placeholder="Carro muito confortável, foi uma ótima experiência de compra"
                />
                <Button onClick={() => handleSubmitComment()}>Comentar</Button>
              </InputAndButtonDiv>
              <SugestionsDiv>
                <ASugestionDiv>
                  <Text onClick={() => setDescription("Gostei muito!")}>
                    Gostei muito!
                  </Text>
                </ASugestionDiv>
                <ASugestionDiv>
                  <Text onClick={() => setDescription("Incrível")}>
                    Incrível
                  </Text>
                </ASugestionDiv>
                <ASugestionDiv>
                  <Text
                    onClick={() =>
                      setDescription("Recomendarei para meus amigos")
                    }
                  >
                    Recomendarei para meus amigos
                  </Text>
                </ASugestionDiv>
              </SugestionsDiv>
            </Centered>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <Centered>
              <InputAndButtonDiv>
                <Input placeholder="Carro muito confortável, foi uma ótima experiência de compra" />
                <ButtonGray onClick={() => handleRedirect()}>
                  Comentar
                </ButtonGray>
              </InputAndButtonDiv>
              <SugestionsDiv>
                <ASugestionDiv>
                  <Text>Gostei muito!</Text>
                </ASugestionDiv>
                <ASugestionDiv>
                  <Text>Incrível</Text>
                </ASugestionDiv>
                <ASugestionDiv>
                  <Text>Recomendarei para meus amigos</Text>
                </ASugestionDiv>
              </SugestionsDiv>
            </Centered>
          </Container>
        </>
      )}
    </>
  );
};
export default ProductCreateComment;
