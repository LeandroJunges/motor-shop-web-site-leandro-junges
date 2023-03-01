import { useForm } from "react-hook-form"
import { ContainerGeneral,ContainerModal, ModalHeader } from "./styles"
import { MdClose } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationEditUser } from "../../validations";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { api } from "../../services";

interface IProps {
    setOpenModalEditUser: any;
    user: IUserModal
}

interface IUserModal{
    id: string
    name: string;
    email: string;
    cpf: string;
    cellphone: string;
    dateOfBirth: Date;
    description: string;

}

export const ModalEditUser = ({setOpenModalEditUser, user}:IProps)=>{

   

    const {register, setValue, handleSubmit, formState:{errors}} = useForm<IUserModal>({
        resolver: yupResolver(validationEditUser)
    })

    useEffect(()=>{
        setValue("name", user.name)
        setValue("email", user.email)
        setValue("cpf", user.cpf)
        setValue("cellphone", user.cellphone)
        setValue("dateOfBirth", user.dateOfBirth)
        setValue("description", user.description)
    },[])

    const userToken: string | null = localStorage.getItem("@motorshop: token");
    const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };
      const editUser = async (data:IUserModal)=>{
        const {name, email, cpf, cellphone, dateOfBirth, description} = data
        
        await api.patch(`/users/${data.id}`,data, config).then((res)=>console.log(res.data))

    }

    return (
        <ContainerGeneral>
            <ContainerModal>
            <ModalHeader>
          <h4>Editar perfil</h4>
          <button >
            <MdClose size={22} onClick={()=> setOpenModalEditUser(false)} />
          </button>
          </ModalHeader>
                <form onSubmit={handleSubmit(()=> editUser)} >
                    <p>informações pessoais</p>
                    <label htmlFor="cNameUser">Nome</label>
                    <input type="text" id="cNameUser" placeholder="Novo nome" {...register("name")} />
                    <span>{errors.name?.message}</span>

                    <label htmlFor="cEmail">Email</label>
                    <input type="email" id="cEmail" placeholder="exemple@email.com" {...register("email")} />
                    <span>{errors.email?.message}</span>

                    <label htmlFor="cCpf">CPF</label>
                    <input type="text" id="cCpf" placeholder="123.456.789-00" {...register("cpf")} />
                    <span>{errors.cpf?.message}</span>

                    <label htmlFor="cCellphone">Celular</label>
                    <input type="text" id="cCellphone" placeholder="xx x xxxx-xxxx" {...register("cellphone")} />
                    <span>{errors.cellphone?.message}</span>

                    <label htmlFor="cBirthDate">Data de Nascimento</label>
                    <input type="text" id="cBirthDate" placeholder="31/12/1925" {...register("dateOfBirth")} />
                    <span>{errors.dateOfBirth?.message}</span>

                    <label htmlFor="cDescription">Descrição</label>
                    <textarea cols={2} rows={4} id="cDescription" placeholder="Eu sou uma pessoa ..." {...register("description")} />
                    <span>{errors.description?.message}</span>

                    <div className="containerButtons">
                    <button className="cancel" onClick={()=> setOpenModalEditUser(false)}>Cancelar</button>
                    <button className="save" type="submit"  >Salvar Alterações</button>
                    </div>

                </form>
            </ContainerModal>
        </ContainerGeneral>
    )
}

interface IAddress {
    id: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement?: string;
}


export const ModalEditAddressUser = ({setOpenModalEditAddress}:any) =>{

    const {register, setValue, handleSubmit, formState:{errors}} = useForm<IAddress>({
        resolver: yupResolver(validationEditUser)
    })

    return (
        <ContainerGeneral>
            <ContainerModal>
            <ModalHeader>
          <h4>Editar endereço</h4>
          <button >
            <MdClose size={22} onClick={()=> setOpenModalEditAddress(false)} />
          </button>
          </ModalHeader>
                <form >
                    <p>informações de endereço </p>
                    <label htmlFor="cCep">CEP</label>
                    <input type="text" id="cCep" placeholder="89888.888" {...register("cep")} />
                    <span>{errors.cep?.message}</span>
                    <div>
                        <label htmlFor="cState">Estado</label>
                        <input type="text" id="cState" placeholder="Paraná" {...register("state")} />
                        <span>{errors.state?.message}</span>

                        <label htmlFor="cCity">Cidade</label>
                        <input type="text" id="cCity" placeholder="Curitiba" {...register("city")} />
                        <span>{errors.city?.message}</span>
                    </div>

                    <label htmlFor="cStreet">Rua</label>
                    <input type="text" id="cStreet" placeholder="xx x xxxx-xxxx" {...register("street")} />
                    <span>{errors.street?.message}</span>

                    <div>
                        <label htmlFor="cNUmber">Numero</label>
                        <input type="text" id="cNUmber" placeholder="1029" {...register("number")} />
                        <span>{errors.number?.message}</span>

                        <label htmlFor="cComplement">Complemento</label>
                        <input type="text"  id="cComplement" placeholder=" Apart 12" {...register("complement")} />
                        <span>{errors.complement?.message}</span>

                    </div>

                    <div className="containerButtons">
                    <button className="cancel" onClick={()=> setOpenModalEditAddress(false)}>Cancelar</button>
                    <button className="save">Salvar Alterações</button>

                    </div>

                </form>
            </ContainerModal>
        </ContainerGeneral>
    )
}