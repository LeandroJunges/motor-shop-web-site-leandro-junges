import logo from "../../assets/logo.png"
import {MdOutlineKeyboardArrowUp}from "react-icons/md"
import { ContainerFooter } from "./styles"

const Footer = ()=>{
    return (
        <ContainerFooter>
            <img src={logo} alt="imagem-logo" />
            <span> &copy; 2023 - Todos os direitos reservados.  </span>
            <button><MdOutlineKeyboardArrowUp /></button>
        </ContainerFooter>
    )
}

export default Footer