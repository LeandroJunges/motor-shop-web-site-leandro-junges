import { IProps } from "./interface";
import { Container, Main } from "./style";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

const ProductionCardAuction = ({ product }: IProps) => {
  const { user } = product;

  return (
    <Main>
      <div className="img-wrapper">
        <span className="countdown heading-7-500">
          <AiOutlineClockCircle />
          <p>01:58:00</p>
        </span>
        <img src={product.img} alt={product.title + "Image"} />
      </div>

      <Container>
        <h2 className="heading-7-600 ad-title">{product.title}</h2>

        <p className="product-description body-2-400">{product.description}</p>

        <section className="user-wrapper">
          <span className="user-icon">
            {user.img ? (
              <img className="user-img" src={user.img} />
            ) : (
              <span>
                {user.name.split(" ")[0][0]}
                {user.name.split(" ")[1][0]}
              </span>
            )}
          </span>
          <h3 className="body-2-500">{user.name}</h3>
        </section>

        <section className="info-wrapper">
          <div className="info body-2-500">
            <span>
              <p>{product.mileage} KM</p>
            </span>
            <span>
              <p>{product.year}</p>
            </span>
          </div>

          <p className="heading-7-500 ad-price">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </section>
      </Container>

      <button className="button-big-text ">
        <span>Acessar página do leilão</span>
        <BsArrowRight />
      </button>
    </Main>
  );
};

export default ProductionCardAuction;
