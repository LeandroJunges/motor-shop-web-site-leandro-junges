import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  min-width: 450px;
  max-width: 550px;
  height: 300px;
  position: relative;

  display: flex;
  justify-content: center;

  border-radius: 4px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);

  transition: 300ms all;
  /* cursor: grab; */

  &:hover {
    background-color: rgba(0, 0, 0, 0.51);

    .img-wrapper > img {
      transform: scale(1.2);
      max-height: 100%;
      max-width: 100%;
    }

    .button-wrapper > .button-container > svg {
      width: 30px;
    }
  }

  .img-wrapper {
    width: 90%;
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
      box-sizing: border-box;

      position: absolute;
      left: 0;
      top: 24px;
      z-index: 10;

      background-color: #fff;
      border-radius: 32px;

      p {
        width: fit-content;
        margin: 3px auto;
      }

      svg {
        color: var(--brand-1);
      }
    }

    img {
      transform: scale(1);
      transition: all 300ms;
    }
  }

  .button-wrapper {
    width: 100%;
    height: 40px;

    position: absolute;
    bottom: 0px;

    display: flex;
    justify-content: center;

    cursor: pointer;

    border-radius: 0 0 4px 4px;
    border: none;

    background-color: var(--brand-1);

    .button-container {
      width: 90%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      color: #fff;
      svg {
        font-size: 26px;
        transition: all 300ms;
      }
    }
  }
`;

export const Container = styled.div`
  width: 90%;
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
