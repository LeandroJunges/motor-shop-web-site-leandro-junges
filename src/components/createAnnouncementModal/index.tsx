import { Backdrop, Content, Footer, Header, Main } from "./style";
import { GrClose } from "react-icons/gr";
import Input from "../InputDefault";
import Button from "../Button";
import { useState } from "react";

interface IProps {
  open?: boolean;
}

const CreateAnnouncementModal = ({ open }: IProps) => {
  const [sellType, setSellType] = useState("sell");
  const [vehicleType, setVehicleType] = useState("car");
  const [publicated, setPublicated] = useState(1);

  return (
    <>
      {open && (
        <Backdrop>
          <Main>
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
                  type="submit"
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
                  type="submit"
                  onClick={() => {
                    setSellType("auction");
                  }}
                />
              </div>

              <h2 className="body-2-500">Informações do veículo</h2>
              <Input
                label="Título"
                placeholder="Mercedes Benz A 200 CGI"
                type="text"
              />

              <div className="input-group">
                <Input type="number" label="Ano" placeholder="2018" />
                <Input type="number" label="Quilometragem" placeholder="0" />
                <Input
                  type="number"
                  label={sellType === "sell" ? "Preço" : "Lance inicial"}
                  placeholder="50.000,00"
                />
              </div>

              <Input
                label="Descrição"
                placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque doloremque minus exercitationem"
                type="text"
                textarea
              />

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
                  type="submit"
                  onClick={() => {
                    setVehicleType("car");
                  }}
                />
                <Button
                  background={
                    vehicleType === "bike" ? "var(--brand-1)" : "transparent"
                  }
                  border={
                    vehicleType === "bike"
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
                  type="submit"
                  onClick={() => {
                    setVehicleType("bike");
                  }}
                />
              </div>

              <Input
                type="text"
                label="Imagem da capa"
                placeholder="https://image.com"
              />
              <Input
                type="text"
                label="1° Imagem da galeria"
                placeholder="https://image.com"
              />
              <Input
                type="text"
                label="2° Imagem da galeria"
                placeholder="https://image.com"
              />
            </Content>

            <Footer>
              <button className="button-big-text delete-button">
                Cancelar
              </button>
              <button className="button-big-text save-button">
                Criar anúncio
              </button>
            </Footer>
          </Main>
        </Backdrop>
      )}
    </>
  );
};

export default CreateAnnouncementModal;
