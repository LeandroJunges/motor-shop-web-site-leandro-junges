import styled from "styled-components";

export const ContainerBannerHome = styled.div`
  display: flex;
  background-color: var(--brand-2);
  justify-content: center;
  height: 400px;
  align-items: center;
  min-width: 100%;

  .containerBannerContent {
    width: 65%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    color: var(--whiteFixed);
  }

  h2 {
    font-size: 24px;
    text-align: center;
  }

  span {
    font-size: 16px;
    font-family: "inter";
  }

  .containerButton {
    width: 80%;
    display: flex;
    justify-content: space-evenly;

    button {
      width: 85px;
      border: 1.5px solid var(--grey-10);
      border-radius: 4px;
      height: 48px;
      background-color: transparent;
      color: var(--whiteFixed);
      cursor: pointer;
    }
  }

  @media (min-width: 769px) {
    h2 {
      font-size: 44px;
    }

    .containerButton {
      width: 50%;

      button {
        width: 150px;
      }
    }
  }
`;

export const ContainerAuction = styled.div`
  h4 {
    font-size: 20px;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    margin-left: 10px;
  }
  .carousel {
    width: 96%;
    height: 340px;
    margin-left: 10px;
    display: flex;
    gap: 15px;
    overflow: auto;
    cursor: pointer;
  }
  li {
    display: flex;
    min-width: 300px;
    height: 293px;
    justify-content: center;

    img {
      width: 90%;
    }
  }

  @media (min-width: 769px) {
    .carousel {
      width: 100%;
      /* overflow: hidden; */
    }

    li {
      min-width: 500px;
      height: 320px;
      img {
        width: 100%;
      }
    }
  }
`;

export const ContainerListCar = styled.div`
  ul {
    display: flex;
    overflow-x: auto;
  }
  li {
    margin: 10px 18px;
  }
  h4 {
    font-size: 20px;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    margin-left: 10px;
  }
`;

export const ContainerListMotorcycle = styled.div`
  ul {
    display: flex;
    overflow-x: auto;
  }
  li {
    margin: 10px 18px;
  }
  h4 {
    font-size: 20px;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    margin-left: 10px;
  }
`;
