import { useEffect, useState } from "react";
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

const ProductCreateComment = ({ user }: any) => {
  const [description, setDescription] = useState("");

  const handleRedirect = () => {
    //redirecionar para login
  };

  const handleSubmitComment = () => {
    //criar comentário
    console.log(description);
    setDescription("");
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
