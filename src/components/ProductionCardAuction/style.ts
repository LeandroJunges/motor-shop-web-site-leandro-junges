import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  max-width: 550px;
  height: 270px;
  position: relative;

  display: flex;
  justify-content: center;

  border-radius: 4px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);

  transition: 300ms all;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.51);

    .img-wrapper > img {
      transform: scale(1.2);
    }

    button > svg {
      width: 30px;
    }
  }

  .img-wrapper {
    width: 100%;
    height: 230px;
    position: relative;

    display: flex;
    justify-content: center;

    .countdown {
      width: 100px;
      height: 26px;
      padding: 0 8px;

      display: flex;
      align-items: center;

      position: absolute;
      left: 13px;
      top: 13px;

      background-color: #fff;
      border-radius: 32px;

      p {
        width: fit-content;
        margin: 3px auto;
      }
    }

    img {
      transform: scale(1);
      transition: all 300ms;
    }
  }

  button {
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;

    position: absolute;
    bottom: 0px;

    border: none;
    border-radius: 0 0 4px 4px;
    background-color: var(--brand-1);
    color: #fff;
    cursor: pointer;

    svg {
      width: 60px;
      font-size: 26px;
      transition: all 300ms;
    }
  }
`;

export const Container = styled.div`
  width: 95%;
  height: 150px;
  position: absolute;
  bottom: 50px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  .ad-title {
    color: var(--grey-10);
  }

  .product-description {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: var(--grey-5);
  }

  .user-wrapper {
    width: 100%;
    height: 32px;

    display: flex;
    align-items: center;
    gap: 8px;

    h3 {
      color: #fff;
    }

    .user-icon {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 150px;
      background-color: var(--random-12);

      color: #fff;
      font-size: 14px;
      font-family: "Inter", sans-serif;
    }

    .user-img {
      width: 32px;

      border-radius: 150px;
    }
  }

  .info-wrapper {
    width: 100%;
    height: 32px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .info {
      display: flex;
      gap: 12px;

      color: var(--brand-1);

      span {
        width: fit-content;
        height: 32px;

        padding: 0 8px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 4px;
        background-color: var(--brand-4);
      }
    }

    .ad-price {
      color: #fff;
    }
  }
`;
