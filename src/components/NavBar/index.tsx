import { Container, UlStyle } from "./style"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import Button from "../Button"
const NavBar = () =>{
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    return(
        <Container>
            <section className="nav-itens">
                <ul>
                    <Link to={"/carros/"}>Carros</Link>
                    <Link to={"/motos/"}>Motos</Link>
                    <Link to={"/leilao"}>Leilão</Link>
                </ul>
            </section>
            <section className="nav-session">
                {user ? 
                <UlStyle>
                    <Button font_size={16} font_weight={400} background="var(--whiteFixed)" border="none" color="var(--grey-2)" description="Editar Perfil"/>
                    <Button font_size={16} font_weight={400} background="var(--whiteFixed)" border="none" color="var(--grey-2)" description="Editar Endereço"/>
                    {user.isAdvertiser &&
                    <Button font_size={16} font_weight={400} background="var(--whiteFixed)" border="none" color="var(--grey-2)" description="Meus Anúncios"/>
                    }
                    <Button font_size={16} font_weight={400} background="var(--whiteFixed)" border="none" color="var(--grey-2)" description="Sair"/>
                </UlStyle> 
                :
                <ul>
                    <Link to={"/login/"} className="login">Fazer login</Link>
                    <Button description="Cadastrar" box_sizing="border-box" background="var(--grey-10)" border="1.5px solid var(--grey-4)" color="var(--grey-0)" border_radius={4} padding="12px 28px" font_weight={600} onClick={ () => navigate("/register/")}/>
                </ul>
                }
            </section>
        </Container>
    )
}

export default NavBar