import { IProduct } from "./interface";
import { Main } from "./style";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { user } = product;
  return (
    <>
      <Main>
        <section className="img-wrapper">
          <img src={product.img} alt={`${product.title} main image`} />
        </section>

        <h2>{product.title}</h2>

        <p className="product-description">{product.description}</p>

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
          <h3>{user.name}</h3>
        </section>

        <section className="info-wrapper">
          <div className="info">
            <span>
              <p>{product.mileage} KM</p>
            </span>
            <span>
              <p>{product.year}</p>
            </span>
          </div>

          <p className="product-price">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </section>
      </Main>
    </>
  );
};

export default ProductCard;
