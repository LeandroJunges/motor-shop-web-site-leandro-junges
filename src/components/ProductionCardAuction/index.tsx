import { IProps } from "./interface";
import { Container, Main } from "./style";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

interface ITimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const ProductionCardAuction = ({ product }: IProps) => {
  const { user } = product;

  const getTime = () => {
    let year = new Date().getFullYear();

    const difference = +new Date(`09/03/${year}`) - +new Date();

    let timeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState<ITimeLeft>(getTime());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(getTime());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Main>
      <div className="img-wrapper">
        <span className="countdown heading-7-500">
          <AiOutlineClockCircle />
          <p>
            {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
          </p>
        </span>
        <img src={product.imgMain} alt={product.title + "Image"} />
      </div>

      <Container>
        <h2 className="heading-7-600 ad-title">{product.title}</h2>

        <p className="product-description body-2-400">{product.description}</p>

        {window.location.pathname !== "/admin" && (
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
        )}

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
            {Number(product.initialBid!).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </section>
      </Container>

      <div className="button-wrapper">
        <div className="button-container button-big-text">
          <span>Acessar página do leilão</span>
          <BsArrowRight />
        </div>
      </div>
    </Main>
  );
};

export default ProductionCardAuction;
