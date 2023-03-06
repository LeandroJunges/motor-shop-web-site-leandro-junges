import { useState } from "react";
import ProductLargeImage from "../../ProductLargeImage";
import { Title } from "../ProductDesciption/styles";
import {
  Container,
  ImgDiv,
  ImgsContainer,
  TitleDiv,
  Img,
  Centered,
} from "./styles";

const ProductImage = ({
  imgs,
  setOpen1,
  setOpen2,
  setOpen3,
  setOpen4,
  setOpen5,
  setOpen6,
}: any) => {
  return (
    <Container>
      <Centered>
        <TitleDiv>
          <Title>Fotos</Title>
        </TitleDiv>
        <ImgsContainer>
          {imgs.length > 0 && (
            <ImgDiv
              style={{ cursor: "pointer" }}
              onClick={() => setOpen1(true)}
            >
              <Img src={imgs[0].link} />
            </ImgDiv>
          )}
          {imgs.length > 1 && (
            <ImgDiv
              style={{ cursor: "pointer" }}
              onClick={() => setOpen2(true)}
            >
              <Img src={imgs[1].link} />
            </ImgDiv>
          )}
          {imgs.length > 2 && (
            <ImgDiv
              style={{ cursor: "pointer" }}
              onClick={() => setOpen3(true)}
            >
              <Img src={imgs[2].link} />
            </ImgDiv>
          )}
          {imgs.length > 3 && (
            <ImgDiv
              style={{ cursor: "pointer" }}
              onClick={() => setOpen4(true)}
            >
              <Img src={imgs[3].link} />
            </ImgDiv>
          )}
          {imgs.length > 4 && (
            <ImgDiv
              style={{ cursor: "pointer" }}
              onClick={() => setOpen5(true)}
            >
              <Img src={imgs[4].link} />
            </ImgDiv>
          )}
          {imgs.length > 5 && (
            <ImgDiv
              style={{ cursor: "pointer" }}
              onClick={() => setOpen6(true)}
            >
              <Img src={imgs[5].link} />
            </ImgDiv>
          )}
        </ImgsContainer>
      </Centered>
    </Container>
  );
};
export default ProductImage;
