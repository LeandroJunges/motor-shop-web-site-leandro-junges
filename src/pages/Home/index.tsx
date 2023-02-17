import Footer from "../../components/Footer"
import { ContainerBannerHome } from "./styles"

const Home = () =>{
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
            <div>
                <h4>Leilão</h4>
                <ul>
                    <p>lista de carros para o leilão</p>
                </ul>
            </div>
            <div>
                <h4>Carros</h4>
                <p>lista de carro </p>
            </div>
            <div>
                <h4>Motos</h4>
                <p>lista de motos</p>
            </div>
            <Footer />
        </div>
    )

}

export default Home