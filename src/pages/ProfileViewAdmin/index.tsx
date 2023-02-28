
import HeaderMocado from "../../components/HeaderMocado"
import {motion} from "framer-motion"
import { ContainerAuction, ContainerListCar, ContainerListMotorcycle } from "../Home/styles"
import ProductCard from "../../components/ProductCard"
import ProductionCardAuction from "../../components/ProductionCardAuction"
import Footer from "../../components/Footer"
import { useContext, useEffect, useRef, useState } from "react"
import { AnnouncementContext } from "../../context/AnnouncementContext"
import { ContainerBannerAdmin } from "./styles"
import Modal from "../../components/Modal"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/userContext"

const ProfileViewAdmin = ()=>{

    const {admCar,admMotorcycle, auctions, goProduct,showUserAnnouncements, setModal, modal} = useContext(AnnouncementContext)
    const {user, setLoading} = useContext(UserContext)
    const [width, setWidth] = useState(0)

    const token = localStorage.getItem("@motorshop: token")
    const person = localStorage.getItem("@motorshop: userId")
    const navigate = useNavigate()

    const carousel = useRef<HTMLUListElement>(null)
    useEffect(()=>{
        if(token){
            showUserAnnouncements(person!)
        }
    },[])

    return(
        <>
        {token ? (
            <>
            {modal && <Modal />}
                <HeaderMocado/>
            <ContainerBannerAdmin>
            <div className="containerContentAdmin">
                <div className="content">
                <abbr title={user!.name}><img src={user?.img} alt={user?.name} /></abbr>
                <p>{user!.name} <span>{user!.isAdvertiser && "Anunciante" }</span></p>
                </div>
                <p>{user?.description}</p>
                <button onClick={()=> setModal("add")}>Criar anuncio</button>
            </div>
        </ContainerBannerAdmin>
        <ContainerAuction>
                <h4>Leilão</h4>
                <motion.ul ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
                    {auctions.map((auction)=>{
                        return(
                            <motion.li drag="x" dragConstraints={{right:0, left: -width}} className="inner" key={auction.id} ><ProductionCardAuction product={auction} /></motion.li>
                        )
                    })}
                    
                    
                </motion.ul>
            </ContainerAuction>
            <ContainerListCar>
            <h4>Carros</h4>
            <ul>               
            {admCar.map((car)=>{
               return (
                   <li  key={car.id}><ProductCard  product={car} />
                    <div className="buttonsProfileCard">
                        <button onClick={()=> setModal("edit")} >editar</button>
                        <button>ver como</button>
                    </div>
                   </li>

               ) 
            })}
            </ul>
                
            </ContainerListCar>
            <ContainerListMotorcycle>
            <h4>Motos</h4>
            <ul>
                {admMotorcycle.map((motorcycle)=>{
                  return(
                    <li key={motorcycle.id}><ProductCard  product={motorcycle} />
                    <div>
                        <button onClick={()=> setModal("edit")}>editar</button>
                        <button>ver como</button>
                    </div>
                    </li>
                  ) 
                    
                })}
            </ul>
            </ContainerListMotorcycle>
            <Footer />
            </>
        ):(
            navigate("/")
        )}
        
        </>
    )
}

export default ProfileViewAdmin