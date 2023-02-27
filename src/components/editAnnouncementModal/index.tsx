import {
  Backdrop,
  ButtonForAdd,
  Content,
  DivForTriple,
  Header,
  Main,
  Title,
} from "../createAnnouncementModal/style";
import { Footer } from "./style";
import { GrClose } from "react-icons/gr";
import {
  InputDiv,
  Input,
  InputArea,
  InputDivLarge,
  InputDivSmall,
} from "../createAnnouncementModal/style";
import Button from "../Button";
import { useState, useEffect, useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services";
import { AnnouncementContext } from "../../context/AnnouncementContext";



const EditAnnouncementModal = (announcement: any) => {
  const [sellType, setSellType] = useState("sell");
  const [vehicleType, setVehicleType] = useState("car");
  const [images, setImages] = useState<String[]>([]);
  const [im1, setIm1] = useState("");
  const [im2, setIm2] = useState("");
  const [im3, setIm3] = useState("");
  const [im4, setIm4] = useState("");
  const [im5, setIm5] = useState("");
  const [im6, setIm6] = useState("");
  const {setModal} = useContext(AnnouncementContext)
  


  
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    year: yup.number().required("Ano obrigatório"),
    mileage: yup.number().required("Quilimetragem obrigatório"),
    price: yup.number().required("Valor obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
    imgMain: yup.string().required("Imagem obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const userToken: string | null = localStorage.getItem("@motorshop: token");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  const onSubmitFunction = async (data: any) => {
    const { title, year, mileage, price, description, imgMain } = data;
    const isAuction = sellType === "sell" ? false : true;
    if (isAuction === true) {
      const announcement: IAnnouncementCreate = {
        isAuction,
        title,
        year: String(year),
        vehicleType,
        mileage,
        description,
        imgMain,
        initialBid: price,
      };
      if (images.length > 0) {
        let imgs: IImgs = {};

        if (img1.length > 0) {
          imgs.img1 = img1;
        }
        if (img2.length > 0) {
          imgs.img2 = img2;
        }
        if (img3.length > 0) {
          imgs.img3 = img3;
        }
        if (img4.length > 0) {
          imgs.img4 = img4;
        }
        if (img5.length > 0) {
          imgs.img5 = img5;
        }
        if (img6.length > 0) {
          imgs.img6 = img6;
        }
        announcement.imgs = imgs;
      }
      await api
        .patch(`/announcements/${announce.id}`, announcement, config)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    const announcement: IAnnouncementCreate = {
      isAuction,
      title,
      year: String(year),
      mileage,
      vehicleType,
      price,
      description,
      imgMain,
    };


    await api
      .post(`/announcements/${announce.id}`, announcement, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
     
        <Backdrop>
          <Main onSubmit={handleSubmit(onSubmitFunction)}>
            <Header>
              <h2 className="heading-7-500">Editar anúncio</h2>
              <GrClose onClick={()=> setModal(null)} />
            </Header>

            <Content>
              <h2 className="body-2-500">Tipo de anúncio</h2>
              <div className="input-group">
                <Button
                  background={
                    sellType === "sell" ? "var(--brand-1)" : "transparent"
                  }
                  border={
                    sellType === "sell"
                      ? "1.5px solid var(--brand-1)"
                      : "1.5px solid var(--grey-4)"
                  }
                  color={
                    sellType === "sell" ? "var(--grey-10)" : "var(--grey-0)"
                  }
                  description="Venda"
                  border_radius={4}
                  padding="12px 28px"
                  font_size={16}
                  font_weight={600}
                  width="100%"
                  type="button"
                  onClick={() => {
                    setSellType("sell");
                  }}
                />
                <Button
                  background={
                    sellType === "auction" ? "var(--brand-1)" : "transparent"
                  }
                  border={
                    sellType === "auction"
                      ? "1.5px solid var(--brand-1)"
                      : "1.5px solid var(--grey-4)"
                  }
                  color={
                    sellType === "sell" ? "var(--grey-0)" : "var(--grey-10)"
                  }
                  description="Leilão"
                  border_radius={4}
                  padding="12px 28px"
                  font_size={16}
                  font_weight={600}
                  width="100%"
                  type="button"
                  onClick={() => {
                    setSellType("auction");
                  }}
                />
              </div>

              <h2 className="body-2-500">Informações do veículo</h2>
              <InputDiv>
                <Title>Título</Title>
                <Input
                  {...register("title")}
                  // label="Título"
                  placeholder="Mercedes Benz A 200 CGI"
                  type="text"
                />
              </InputDiv>

              <DivForTriple>
                <InputDivSmall>
                  <Title>Ano</Title>
                  <Input
                    {...register("year")}
                    type="number"
                    // label="Ano"
                    placeholder="2018"
                  />
                </InputDivSmall>
                <InputDivSmall>
                  <Title>Quilometragem</Title>
                  <Input
                    {...register("mileage")}
                    type="number"
                    // label="Ano"
                    placeholder="0"
                  />
                </InputDivSmall>
                <InputDivSmall>
                  <Title>
                    {sellType === "sell" ? "Preço" : "Lance inicial"}
                  </Title>
                  <Input
                    {...register("price")}
                    type="number"
                    // label={sellType === "sell" ? "Preço" : "Lance inicial"}
                    placeholder="50.000,00"
                  />
                </InputDivSmall>
              </DivForTriple>

              <InputDivLarge>
                <Title>Description</Title>
                <InputArea
                  {...register("description")}
                  // label="Descrição"
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque doloremque minus exercitationem"
                  // type="text"
                  // textarea
                />
              </InputDivLarge>

              <h2 className="body-2-500">Tipo de veículo</h2>
              <div className="input-group">
                <Button
                  background={
                    vehicleType === "car" ? "var(--brand-1)" : "transparent"
                  }
                  border={
                    vehicleType === "car"
                      ? "1.5px solid var(--brand-1)"
                      : "1.5px solid var(--grey-4)"
                  }
                  color={
                    vehicleType === "car" ? "var(--grey-10)" : "var(--grey-0)"
                  }
                  description="Carro"
                  border_radius={4}
                  padding="12px 28px"
                  font_size={16}
                  font_weight={600}
                  width="100%"
                  type="button"
                  onClick={() => {
                    setVehicleType("car");
                  }}
                />
                <Button
                  background={
                    vehicleType === "motorcycle"
                      ? "var(--brand-1)"
                      : "transparent"
                  }
                  border={
                    vehicleType === "motorcycle"
                      ? "1.5px solid var(--brand-1)"
                      : "1.5px solid var(--grey-4)"
                  }
                  color={
                    vehicleType === "car" ? "var(--grey-0)" : "var(--grey-10)"
                  }
                  description="Moto"
                  border_radius={4}
                  padding="12px 28px"
                  font_size={16}
                  font_weight={600}
                  width="100%"
                  type="button"
                  onClick={() => {
                    setVehicleType("motorcycle");
                  }}
                />
              </div>

              <InputDiv>
                <Title>Imagem da capa</Title>
                <Input
                  {...register("imgMain")}
                  type="text"
                  // label="Imagem da capa"
                  placeholder="https://image.com"
                />
              </InputDiv>
              {images.length > 0 && (
                <InputDiv>
                  <Title>1º Imagem da galeria</Title>
                  <Input
                    value={img1}
                    onChange={(e) => setImg1(e.target.value)}
                    type="text"
                    // label="Imagem da capa"
                    placeholder="https://image.com"
                  />
                </InputDiv>
              )}
              {images.length > 1 && (
                <InputDiv>
                  <Title>2º Imagem da galeria</Title>
                  <Input
                    value={img2}
                    onChange={(e) => setImg2(e.target.value)}
                    type="text"
                    // label="Imagem da capa"
                    placeholder="https://image.com"
                  />
                </InputDiv>
              )}
              {images.length > 2 && (
                <InputDiv>
                  <Title>3º Imagem da galeria</Title>
                  <Input
                    value={img3}
                    onChange={(e) => setImg3(e.target.value)}
                    type="text"
                    // label="Imagem da capa"
                    placeholder="https://image.com"
                  />
                </InputDiv>
              )}
              {images.length > 3 && (
                <InputDiv>
                  <Title>4º Imagem da galeria</Title>
                  <Input
                    value={img4}
                    onChange={(e) => setImg4(e.target.value)}
                    type="text"
                    // label="Imagem da capa"
                    placeholder="https://image.com"
                  />
                </InputDiv>
              )}
              {images.length > 4 && (
                <InputDiv>
                  <Title>5º Imagem da galeria</Title>
                  <Input
                    value={img5}
                    onChange={(e) => setImg5(e.target.value)}
                    type="text"
                    // label="Imagem da capa"
                    placeholder="https://image.com"
                  />
                </InputDiv>
              )}
              {images.length > 5 && (
                <InputDiv>
                  <Title>6º Imagem da galeria</Title>
                  <Input
                    value={img6}
                    onChange={(e) => setImg6(e.target.value)}
                    type="text"
                    // label="Imagem da capa"
                    placeholder="https://image.com"
                  />
                </InputDiv>
              )}
              <ButtonForAdd
                type="button"
                onClick={() => {
                  if (images.length < 6) {
                    setImages([...images, "1"]);
                  }
                }}
              >
                Adicionar campo para imagem da galeria
              </ButtonForAdd>

              {/* <input
                {...register("img1")}
                type="text"
                // label="1° Imagem da galeria"
                placeholder="https://image.com"
              />
              <input
                {...register("img2")}
                type="text"
                // label="2° Imagem da galeria"
                placeholder="https://image.com"
              /> */}
            </Content>

            <Footer>
              <button className="button-big-text delete-button"onClick={(e)=> console.log(e.target)}>
                Excluir anúncio
              </button>
              <button type="submit" className="button-big-text save-button">
                Salvar alterações
              </button>
            </Footer>
          </Main>
        </Backdrop>
    </>
  );
};

export default EditAnnouncementModal;
