import Fields from "../../components/Fields"
import Header from "../../components/Header"
import Form from "../../components/Form"
import Text from "../../components/Text"
import Input from "../../components/Input"
import { Container } from "./style"
import Button from "../../components/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { validationRegister } from "../../validations";
import { useContext } from "react"
import { UserContext } from "../../context/userContext"
interface IRegister {
  name: string
  email: string
  cpf: string
  cellphone: number
  password: string
  confirmPassword: string
  description: string
  dateOfBirth: Date
  isAdvertiser: string 
  cep: number
  state: string
  street: string
  number: string
  city: string
  complement: string
  img: string
}
const Register = () => {
  const {register, handleSubmit, formState: {errors},  } = useForm<IRegister>({resolver:yupResolver(validationRegister)})
  const {registerUser} =useContext(UserContext)
  console.log(errors)
  return(
    <>
      <Header/>
      <Container>
        <Form section1="Informações Pessoais" title="Cadastrar" onSubmit={handleSubmit(registerUser)}>
          <Fields placeholder="Ex: Samuel Leão" description="Nome" color="var(--grey-1)" size={14} weight={500} padding="0px 16px" register={{...register("name")}}/>
          <Fields placeholder="Ex: samuel@mail.com" description="Email" color="var(--grey-1)" size={14} weight={500} padding="0px 16px" type="email" register={{...register("email")}}/>
          <Fields placeholder="Ex: 000.000.000-00" description="CPF" color="var(--grey-1)" size={14} weight={500} padding="0px 16px" type="number" register={{...register("cpf")}}/>
          <Fields placeholder="(DDD) 90000-0000" description="Celular" color="var(--grey-1)" size={14} weight={500} padding="0px 16px" type="number" register={{...register("cellphone")}}/>
          <Fields placeholder="00/00/00" description="Data de nascimento" color="var(--grey-1)" size={14} weight={500} padding="0px 16px" type="date" register={{...register("dateOfBirth")}}/>
          <Fields placeholder="Digitar Descrição" description="Descrição" color="var(--grey-1)" size={14} weight={500} padding="0px 16px" register={{...register("description")}}/>
          <Text family="Inter" weight={500} size={14} color="--black-1" description="Informações de endereço"/>
          <Fields placeholder="00000-000" description="CEP" color="var(--grey-1)" size={14} weight={500} padding="0px 16px" type="number" register={{...register("cep")}}/>
          <div className="info">
            <Fields placeholder="Digitar estado" description="Estado" color="var(--grey-1)" size={14} weight={500} padding="0px 16px" register={{...register("state")}}/>
            <Fields placeholder="Digitar cidade" description="Cidade" color="var(--grey-1)" size={14} weight={500} padding="0px 16px" register={{...register("city")}}/>
          </div>
          <Fields placeholder="Digitar Rua" description="Rua" color="var(--grey-1)" size={14} weight={500} padding="0px 16px" register={{...register("street")}} />
          <div className="info">
            <Fields placeholder="Digitar Numero" description="Numero" color="var(--grey-1)" size={14} weight={500} padding="0px 16px" register={{...register("number")}}/>
            <Fields placeholder="Digitar Complemento" description="Complemento" color="var(--grey-1)" size={14} weight={500} padding="0px 16px" register={{...register("complement")}}/>
          </div>
          <Text family="Inter" weight={500} size={14} color="--black-1" description="Tipo de conta"/>
          <div className="info">
            <select {...register("isAdvertiser")}>
              <option  value="false">Comprador</option>
              <option   value="true">Anunciante</option>
            </select>
          </div>
          <Fields placeholder="Digitar senha" description="Senha" color="var(--grey-1)" size={14} weight={500} padding="0px 16px" type="password"register={{...register("password")}}/>
          <Fields placeholder="Digitar senha" description="Confirmar Senha" color="var(--grey-1)" size={14} weight={500} padding="0px 16px" type="password" register={{...register("confirmPassword")}}/>
          <Text family="Inter" weight={500} size={14} color="--black-1" description="Imagem"/>
          <Fields placeholder="Url da imagem" description="URL" color="var(--grey-1)" size={14} weight={500} padding="0px 16px" type="url"register={{...register("img")}}/>
          <Button background="var(--brand-1)" border=" 1.5px solid var(--brand-1)"  color="var(--grey-10)" description="Finalizar cadastro" border_radius={4} padding="12px 28px" font_size={16} font_weight={600} width="100%" type="submit"/>
        </Form>
      </Container>
    </>
  ) 
}
export default Register