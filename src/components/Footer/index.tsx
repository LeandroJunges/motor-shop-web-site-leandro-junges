import logo from "../../assets/logo.png"
import { ContainerFooter } from "./sytled"
import {MdOutlineKeyboardArrowUp}from "react-icons/md"

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