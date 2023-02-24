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
import { useState, useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services";

interface IProps {
  open?: boolean;
}

const EditAnnouncementModal = ({ open }: IProps, announcement: any) => {
  const [sellType, setSellType] = useState("sell");
  const [vehicleType, setVehicleType] = useState("car");
  const [images, setImages] = useState<String[]>([]);
  const [urls, setUrls] = useState<String[]>([]);
  const [im1, setIm1] = useState("");
  const [im2, setIm2] = useState("");
  const [im3, setIm3] = useState("");
  const [im4, setIm4] = useState("");
  const [im5, setIm5] = useState("");
  const [im6, setIm6] = useState("");

  console.log(im1);
  console.log(im2);

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
      const obj = {
        isAuction,
        title,
        year,
        mileage,
        description,
        imgMain,
        initialBid: price,
      };
      await api
        .patch(`/announcements/${announcement.id}`, obj, config)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    const obj = {
      isAuction,
      title,
      year: String(year),
      mileage,
      vehicleType,
      price,
      description,
      imgMain,
    };
    console.log(obj);

    await api
      .patch(`/announcements/${announcement.id}`, obj, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {open && (
        <Backdrop>
          <Main onSubmit={handleSubmit(onSubmitFunction)}>
            <Header>
              <h2 className="heading-7-500">Criar anúncio</h2>
              <GrClose />
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
              {images.map((i) => {
                return (
                  <>
                    {i[0] && (
                      <InputDiv>
                        <Title>Imagem da galeria</Title>
                        <Input
                          onChange={(e) => setIm1(e.target.value)}
                          type="text"
                          // label="Imagem da capa"
                          placeholder="https://image.com"
                        />
                      </InputDiv>
                    )}
                    {i[1] && (
                      <InputDiv>
                        <Title>Imagem da galeria</Title>
                        <Input
                          onChange={(e) => setIm2(e.target.value)}
                          type="text"
                          // label="Imagem da capa"
                          placeholder="https://image.com"
                        />
                      </InputDiv>
                    )}
                    {i[2] && (
                      <InputDiv>
                        <Title>Imagem da galeria</Title>
                        <Input
                          onChange={(e) => setIm3(e.target.value)}
                          type="text"
                          // label="Imagem da capa"
                          placeholder="https://image.com"
                        />
                      </InputDiv>
                    )}
                    {i[3] && (
                      <InputDiv>
                        <Title>Imagem da galeria</Title>
                        <Input
                          onChange={(e) => setIm4(e.target.value)}
                          type="text"
                          // label="Imagem da capa"
                          placeholder="https://image.com"
                        />
                      </InputDiv>
                    )}
                    {i[4] && (
                      <InputDiv>
                        <Title>Imagem da galeria</Title>
                        <Input
                          onChange={(e) => setIm5(e.target.value)}
                          type="text"
                          // label="Imagem da capa"
                          placeholder="https://image.com"
                        />
                      </InputDiv>
                    )}
                    {i[5] && (
                      <InputDiv>
                        <Title>Imagem da galeria</Title>
                        <Input
                          onChange={(e) => setIm6(e.target.value)}
                          type="text"
                          // label="Imagem da capa"
                          placeholder="https://image.com"
                        />
                      </InputDiv>
                    )}
                  </>
                );
              })}
              <ButtonForAdd
                type="button"
                onClick={() => setImages([...images, "1"])}
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
              <button className="button-big-text delete-button">
                Excluir anúncio
              </button>
              <button type="submit" className="button-big-text save-button">
                Salvar alterações
              </button>
            </Footer>
          </Main>
        </Backdrop>
      )}
    </>
  );
};

export default EditAnnouncementModal;
