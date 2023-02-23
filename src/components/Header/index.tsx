import { HeaderStyle, FigureStyle, NavStyle} from "./style"
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import ButtonIcon from "../ButtonIcon";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";

const Header = () => {
  const [ isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  return(
      <HeaderStyle>
        <FigureStyle>
          <img src="../../motors-shop.png" alt="logo motorshop" />
        </FigureStyle>
        <NavStyle>
          <ButtonIcon background="var(--grey-10)" border="none" onClick={() => setIsOpen(!isOpen)} className="button-icon">
            {isOpen === false ?  <AiOutlineMenu size={25}/> : <AiOutlineClose size={25}/>}     
          </ButtonIcon>
          <section className="itens">
            <ul>
              <Link to={"/carros/"}>Carros</Link>
              <Link to={"/motos/"}>Motos</Link>
              <Link to={"/leilao"}>Leilão</Link>
            </ul>
          </section>
          <section className="session">
            <ul>
              <Link to={"/login/"} className="login">Fazer login</Link>
              <Button description="Cadastrar" box_sizing="border-box" background="var(--grey-10)" border="1.5px solid var(--grey-4)" color="var(--grey-0)" border_radius={4} padding="12px 28px" font_weight={600} onClick={ () => navigate("/register/")}/>
            </ul>
          </section>
        </NavStyle>
      </HeaderStyle>
  ) 
}

export default Header