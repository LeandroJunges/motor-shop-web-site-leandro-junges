import styled from "styled-components";

interface IProps {
  isActive: boolean;
}

export const Main = styled.div<IProps>`
  width: 312px;
  height: 350px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  a {
    text-decoration: none;
  }

  .product-description {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .img-wrapper {
    width: 95%;
    height: 152px;
    position: relative;

    display: flex;
    justify-content: center;

    background-color: var(--grey-7);
    border: 2px solid transparent;
    transition: 300ms all;

    img {
      max-height: 100%;
      max-width: 100%;
      width: 85%;
      height: 100%;
    }

    .ad-status {
      width: 51px;
      height: 24px;
      position: absolute;

      left: 16px;
      top: 10px;

      background-color: ${(props) =>
        props.isActive ? "var(--brand-1)" : "var(--grey-4)"};
      color: #fff;

      p {
        width: min-content;
        margin: 0 auto;
      }
    }

    &:hover {
      border: 2px solid var(--brand-1);
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
      font-family: "Inter", sans-serif;
    }

    .user-img {
      width: 32px;

      border-radius: 150px;
    }
  }

  .info-wrapper {
    width: 90%;
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
  }
  @media (min-width:769px){
    .img-wrapper{
      width: 100%;
    }
  }
`;
