
import HeaderMocado from "../../components/HeaderMocado"
import {motion} from "framer-motion"
import { ContainerAuction, ContainerListCar, ContainerListMotorcycle } from "../Home/styles"
import ProductCard from "../../components/ProductCard"
import ProductionCardAuction from "../../components/ProductionCardAuction"
import Footer from "../../components/Footer"
import { useContext, useEffect, useRef, useState } from "react"
import { AnnouncementContext } from "../../context/AnnouncementContext"
import { ContainerBannerAdmin } from "./styles"

const ProfileViewAdmin = ()=>{

    const {cars,motorcycles, auctions, goProduct} = useContext(AnnouncementContext)
    const [width, setWidth] = useState(0)

    const carousel = useRef<HTMLUListElement>(null)
    useEffect(()=>{
        setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth)
    },[])

    return(
        <>
        <HeaderMocado/>
        <ContainerBannerAdmin>
            <div className="containerContentAdmin">
                <div className="content">
                <abbr title="Samuel Leao">SL</abbr>
                <p>Samuel Leão <span>Anunciante</span></p>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <button>Criar anuncio</button>
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
            {cars.map((car)=>{
               return (
                   <li  key={car.id}><ProductCard  product={car} />
                    <div>
                        <button>editar</button>
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
                {motorcycles.map((motorcycle)=>{
                  return(
                    <li key={motorcycle.id}><ProductCard  product={motorcycle} />
                    <div>
                        <button>editar</button>
                        <button>ver como</button>
                    </div>
                    </li>
                  ) 
                    
                })}
            </ul>
            </ContainerListMotorcycle>
            <Footer />
        </>
    )
}

export default ProfileViewAdmin