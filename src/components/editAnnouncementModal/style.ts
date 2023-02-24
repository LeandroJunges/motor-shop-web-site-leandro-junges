import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100vw;
  height: max-content;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const Main = styled.div`
  width: 90%;
  max-width: 520px;

  margin: 30px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  border-radius: 8px;
`;

export const Header = styled.div`
  width: 90%;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  .input-group {
    display: flex;
    gap: 9px;
  }
`;

export const Footer = styled(Header)`
  width: 90%;
  gap: 11px;
  margin: 20px 0;

  button {
    height: 48px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .delete-button {
    width: 60%;

    background-color: var(--grey-6);
    color: var(--grey-2);
  }

  .save-button {
    width: 40%;

    background-color: var(--brand-3);
    color: #fff;
  }
`;
