import styled from "styled-components";

export const Main = styled.div`
  width: 312px;
  height: 350px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    font-family: "Lexend";
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }

  .product-description {
    font-family: "Inter";
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: var(--grey-2);

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .img-wrapper {
    width: 100%;
    height: 152px;

    display: flex;
    justify-content: center;

    background-color: var(--grey-7);

    img {
      height: 100%;
    }
  }

  .user-wrapper {
    width: 100%;
    height: 32px;

    display: flex;
    align-items: center;
    gap: 8px;

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
    }

    .user-img {
      width: 32px;

      border-radius: 150px;
    }

    h3 {
      font-family: "Inter";
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
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

      span {
        width: fit-content;
        height: 32px;

        padding: 0 8px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 4px;
        background-color: var(--brand-4);

        p {
          font-family: "Inter";
          font-size: 14px;
          font-weight: 500;
          line-height: 24px;
          color: var(--brand-1);
        }
      }
    }

    .product-price {
      font-family: "Lexend";
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
    }
  }
`;
