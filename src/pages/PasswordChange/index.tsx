import Fields from "../../components/Fields";
import Form from "../../components/Form";
import Header from "../../components/Header";
import { Container } from "./style";
import Button from "../../components/Button";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/userContext";
import { useContext, useState } from "react";

interface IRecovery {
  email: string;
  password?: string;
  token?: string;
}

const PasswordChange = () => {
  const [password, setPassword] = useState(true);

  const { userRecovery } = useContext(UserContext);
  const [authParams] = useSearchParams();
  const navigate = useNavigate();

  const token = authParams.get("token");

  const { register, handleSubmit } = useForm<IRecovery>();
  const recovery = (data: IRecovery) => {
    if (token) {
      data.token = token;
    }
    userRecovery(data);
  };
  return (
    <>
      <Header />
      {token ? (
        <Container>
          <Form
            title="Escolha sua nova senha"
            onSubmit={handleSubmit(recovery)}
          >
            <Fields
              placeholder="Insira sua senha"
              description="Nova senha"
              color="var(--grey-1)"
              size={14}
              weight={500}
              padding="0px 16px"
              type={password ? "password" : "text"}
              register={{ ...register("password") }}
            />

            <Button
              background="var(--grey-10)"
              border="1px solid var(--grey-4)"
              description="Mostrar senha"
              border_radius={4}
              color="var(--grey-0)"
              padding="12px 28px"
              font_size={16}
              font_weight={600}
              width="100%"
              type="button"
              onClick={() => setPassword(!password)}
            />

            <Button
              background="var(--brand-1)"
              border=" 1.5px solid var(--brand-1)"
              color="var(--grey-10)"
              description="Confirmar senha"
              border_radius={4}
              padding="12px 28px"
              font_size={16}
              font_weight={600}
              width="100%"
              type="submit"
            />
          </Form>
        </Container>
      ) : (
        <Container>
          <Form
            title="Recuperar sua senha"
            onSubmit={handleSubmit(userRecovery)}
          >
            <Fields
              placeholder="exemple@mail.com"
              description="E-mail"
              color="var(--grey-1)"
              size={14}
              weight={500}
              padding="0px 16px"
              type="email"
              register={{ ...register("email") }}
            />
            <Button
              background="var(--brand-1)"
              border=" 1.5px solid var(--brand-1)"
              color="var(--grey-10)"
              description="Enviar email"
              border_radius={4}
              padding="12px 28px"
              font_size={16}
              font_weight={600}
              width="100%"
              type="submit"
            />
            <Button
              background="var(--grey-10)"
              border="1px solid var(--grey-4)"
              description="Voltar para login"
              border_radius={4}
              color="var(--grey-0)"
              padding="12px 28px"
              font_size={16}
              font_weight={600}
              width="100%"
              onClick={() => navigate("/login/")}
            />
          </Form>
        </Container>
      )}
    </>
  );
};

export default PasswordChange;
