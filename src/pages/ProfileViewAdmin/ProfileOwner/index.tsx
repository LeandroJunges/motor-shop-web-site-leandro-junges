import { useContext, useEffect, useState } from "react";
import { api } from "../../../services";
import { IUserResponse } from "../../../interfaces";
import { AnnnP, AnnouDiv, ButtonCreate, Centered, Container, ContainerCreateButton, DescDiv, Description, Img, ImgDiv, NameDiv } from "./styles";
import { Title } from "../styles";
import { AnnouncementContext } from "../../../context/AnnouncementContext";

interface Props {
  id: string;
  setOpenCreateAnnouncement : React.Dispatch<React.SetStateAction<boolean>>
}

const ProfileOwner = ({ id, setOpenCreateAnnouncement }: Props) => {
  const [user, setUser] = useState<IUserResponse["user"]>();
  

  useEffect(() => {
    const getUser = async () => {
      await api
        .get(`/users/${id}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.error(err));
    };
    getUser();
  }, []);

  return (
    <>
      {user && (
        <Container>
          <Centered>
            <ImgDiv>
              <Img src={user.img} />
            </ImgDiv>
            <NameDiv>
              <Title>{user.name}</Title>
              <AnnouDiv>
                <AnnnP>Anunciante</AnnnP>
              </AnnouDiv>
            </NameDiv>
            <DescDiv>
              <Description>{user.description}</Description>
            </DescDiv>
            <ContainerCreateButton>
              <ButtonCreate onClick={()=> setOpenCreateAnnouncement(true)}>Criar anúncio</ButtonCreate>
            </ContainerCreateButton>
          </Centered>
        </Container>
      )}
    </>
  );
};
export default ProfileOwner;
