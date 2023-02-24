import Fields from "../../components/Fields"
import Form from "../../components/Form"
import Header from "../../components/Header"
import { Container } from "./style"
import Text from "../../components/Text"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationLogin } from "../../validations"

interface ILogin {
  username: string
  password: string
}

const Login = ()=>{
  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors} } = useForm<ILogin>({resolver: yupResolver(validationLogin)});
  const login = (data:ILogin) => {
    console.log(data)
  }
  return(
    <>
      <Header/>
      <Container>
        <Form title="Login" onSubmit={handleSubmit(login)}>
          <Fields placeholder="Digitar usuário" description="Usuário" color="var(--grey-1)" size={14} weight={500} padding="0px 16px" register={{...register("username")}}/>
          <Fields placeholder="Digitar senha" description="Senha" color="var(--grey-1)" size={14} weight={500} padding="0px 16px" type="password" register={{...register("password")}}/>  
          <Text color="grey-2" size={14} weight={500} description="Esqueci minha senha"/>
          <Button background="var(--brand-1)" border=" 1.5px solid var(--brand-1)"  color="var(--grey-10)" description="Entrar" border_radius={4} padding="12px 28px" font_size={16} font_weight={600} width="100%" type="submit"/>
          <Text color="grey-2" size={14} weight={400} description="Ainda não tem uma conta ?"/>
          <Button background="var(--grey-10)" border="1px solid var(--grey-4)" description="Cadastrar" border_radius={4} color="var(--grey-0)" padding="12px 28px" font_size={16} font_weight={600} width="100%" onClick={() => navigate("/register/")}/>
        </Form>
      </Container>
    </>
  )
}

export default Login