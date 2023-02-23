import Footer from "../../components/Footer"
import { ContainerAuction, ContainerBannerHome, ContainerListCar, ContainerListMotorcycle } from "./styles"
import mercedesA200 from "../../assets/mercedesA200.png"
import {BsArrowRight} from "react-icons/bs"
import {FiClock} from "react-icons/fi"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import ProductCard from "../../components/ProductCard"

const Home = () =>{

    const {cars,motorcycles} = useContext(UserContext)

    return(
        <div>
            <ContainerBannerHome>
                <div className="containerBannerContent ">
                    
                    <h2> Velocidade e experiência em um lugar feito para você </h2>
                    <span> Um ambiente feito para você explorar o seu melhor </span>
                    <div className="containerButton">
                        <button>Carros</button>
                        <button>Motos</button>
                    </div>
                    

                </div>
            </ContainerBannerHome>
            <ContainerAuction>
                <h4>Leilão</h4>
                <ul>
                    <li>
                        <img src={mercedesA200} alt="" />
                        <span className="hour"><FiClock /> 01:58:00</span>
                        <p className="titleAnnouncement">Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</p>
                        <span className="description">Um carro que não compensa você ter não ser que seja bonado na grana!</span>
                        <abbr title="Rodrigo">R</abbr>
                        <p className="name">Rodrigo Tavares</p>

                        <div>
                            <div className="containerInfos">
                                <span>2013</span>
                                <span>0 KM</span>
                            </div>

                            <p className="price">R$ 00.0000,00</p>
                        </div>

                        <div className="containerLink">
                            <a href="#">acessar a pagina de leilão</a>
                            <BsArrowRight />
                        </div>

                    </li>

                    <li>
                        <img src={mercedesA200} alt="" />
                        <span className="hour"><FiClock /> 01:58:00</span>
                        <p className="titleAnnouncement">Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</p>
                        <span className="description">Um carro que não compensa você ter não ser que seja bonado na grana!</span>
                        <abbr title="Rodrigo">R</abbr>
                        <p className="name">Rodrigo Tavares</p>

                        <div>
                            <div className="containerInfos">
                                <span>2013</span>
                                <span>0 KM</span>
                            </div>

                            <p className="price">R$ 00.0000,00</p>
                        </div>

                        <div className="containerLink">
                            <a href="#">acessar a pagina de leilão</a>
                            <BsArrowRight />
                        </div>

                    </li>

                    <li>
                        <img src={mercedesA200} alt="" />
                        <span className="hour"><FiClock /> 01:58:00</span>
                        <p className="titleAnnouncement">Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</p>
                        <span className="description">Um carro que não compensa você ter não ser que seja bonado na grana!</span>
                        <abbr title="Rodrigo">R</abbr>
                        <p className="name">Rodrigo Tavares</p>

                        <div>
                            <div className="containerInfos">
                                <span>2013</span>
                                <span>0 KM</span>
                            </div>

                            <p className="price">R$ 00.0000,00</p>
                        </div>

                        <div className="containerLink">
                            <a href="#">acessar a pagina de leilão</a>
                            <BsArrowRight />
                        </div>

                    </li>

                    <li>
                        <img src={mercedesA200} alt="" />
                        <span className="hour"><FiClock /> 01:58:00</span>
                        <p className="titleAnnouncement">Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</p>
                        <span className="description">Um carro que não compensa você ter não ser que seja bonado na grana!</span>
                        <abbr title="Rodrigo">R</abbr>
                        <p className="name">Rodrigo Tavares</p>

                        <div>
                            <div className="containerInfos">
                                <span>2013</span>
                                <span>0 KM</span>
                            </div>

                            <p className="price">R$ 00.0000,00</p>
                        </div>

                        <div className="containerLink">
                            <a href="#">acessar a pagina de leilão</a>
                            <BsArrowRight />
                        </div>

                    </li>
                    
                </ul>
            </ContainerAuction>
            <ContainerListCar>
            <h4>Carros</h4>
            <ul>               
            {cars.map((car)=>{
               return (
                   <li key={car.id}><ProductCard  product={car} /></li>
               ) 
            })}
            </ul>
                
            </ContainerListCar>
            <ContainerListMotorcycle>
            <h4>Motos</h4>
            <ul>
                {motorcycles.map((motorcycle)=>{
                  return(
                    <li key={motorcycle.id}><ProductCard  product={motorcycle} /></li>
                  ) 
                    
                })}
            </ul>
            </ContainerListMotorcycle>
            <Footer />
        </div>
    )

}

export default Home