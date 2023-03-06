import { Link, Navigate, useNavigate } from "react-router-dom";
import { IProps } from "./interface";
import { Main } from "./style";

const ProductCard = ({ product, isOwner }: IProps) => {
  const token = localStorage.getItem("@motorshop: token");
  const userId = localStorage.getItem("@motorshop: userId");

  const navigate = useNavigate();

  const { user } = product;

  return (
    <>
      {!token || window.location.pathname !== "/admin" ? (
        <Main isActive={!product.isSold}>
          <Link to={`/product/${product.id}`}>
            <section className="img-wrapper">
              {userId === product.user.id && (
                <span className="ad-status body-2-500">
                  <p>{!product.isSold ? "Ativo" : "Inativo"}</p>
                </span>
              )}

              <img src={product.imgMain} alt={`${product.title} main image`} />
            </section>

            <h2 className="heading-7-600">{product.title}</h2>

            <p className="product-description body-2-400">
              {product.description}
            </p>
          </Link>

          <Link
            to={
              product.user.id === userId
                ? "/admin"
                : `/advertiser/${product.user.id}`
            }
          >
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
          </Link>

          <section className="info-wrapper">
            <div className="info body-2-500">
              <span>
                <p>{product.mileage} KM</p>
              </span>
              <span>
                <p>{product.year}</p>
              </span>
            </div>

            <p className="heading-7-500">
              {Number(product.price!).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </section>
        </Main>
      ) : (
        <Main isActive={!product.isSold}>
          <section className="img-wrapper">
            {userId === product.user.id && (
              <span className="ad-status body-2-500">
                <p>{!product.isSold ? "Ativo" : "Inativo"}</p>
              </span>
            )}

            <img src={product.imgMain} alt={`${product.title} main image`} />
          </section>

          <h2 className="heading-7-600">{product.title}</h2>

          <p className="product-description body-2-400">
            {product.description}
          </p>

          <section className="info-wrapper">
            <div className="info body-2-500">
              <span>
                <p>{product.mileage} KM</p>
              </span>
              <span>
                <p>{product.year}</p>
              </span>
            </div>

            <p className="heading-7-500">
              {Number(product.price!).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </section>
        </Main>
      )}
    </>
  );
};

export default ProductCard;
