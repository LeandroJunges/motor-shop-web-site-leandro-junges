import {
  Container,
  Centered,
  Img,
  ImgDiv,
  NameDiv,
  Title,
  AnnouDiv,
  AnnnP,
  DescDiv,
  Description,
  ButtonDiv,
  Button,
} from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../../services";
import { IUserResponse } from "../../../interfaces";
import { Link } from "react-router-dom";

interface Props {
  id: string;
}

const ProductOwner = ({ id }: Props) => {
  const [user, setUser] = useState<IUserResponse["user"]>();

  useEffect(() => {
    const getUser = async () => {
      await api
        .get(`/users/${id}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    };
    getUser();
  }, []);

  return (
    <>
      {user && (
        <Container>
          <Centered>
            {/* <Link to={docume}>To product page</Link> */}
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
          </Centered>
        </Container>
      )}
    </>
  );
};
export default ProductOwner;
