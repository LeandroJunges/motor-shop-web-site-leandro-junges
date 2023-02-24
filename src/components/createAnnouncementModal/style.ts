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

export const Main = styled.form`
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
    justify-content: space-between;
    gap: 9px;
  }
`;

export const DivForTriple = styled.div`
  width: 99%;
  display: flex;
  justify-content: space-between;
`;

export const Footer = styled(Header)`
  gap: 11px;
  margin: 20px 0;
  justify-content: flex-end;

  button {
    height: 48px;
    border: none;
    border-radius: 4px;

    cursor: pointer;
  }

  .delete-button {
    width: 25%;

    background-color: var(--grey-6);
    color: var(--grey-2);
  }

  .save-button {
    width: 40%;

    background-color: var(--brand-3);
    color: #fff;
  }
`;

export const InputDiv = styled.div`
  width: 100%;
  height: 73px;
  display: flex;
  /* align-items: flex-start; */
  justify-content: space-between;
  flex-direction: column;
`;

export const ButtonForAdd = styled.button`
  cursor: pointer;
  background-color: var(--brand-4);
  height: 38px;
  width: 70%;
  border-radius: 4px;
  font-size: 14px;
  color: var(--brand-1);
  font-weight: 600;
  border: 0;
  font-family: "Inter";
`;

export const InputDivLarge = styled.div`
  height: 105px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

export const InputDivSmall = styled.div`
  height: 73px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputArea = styled.textarea`
  width: 99%;
  height: 74px;
  border: 1.5px solid #e9ecef;
  border-radius: 4px;
  background-color: white;
  font-weight: 400;
  font-size: 16px;
  font-family: "Inter";
  :focus {
    background-color: white;
    outline: none;
  }
  ::placeholder {
    padding-top: 5px;
    padding-left: 10px;
    color: var(--grey-3);
    font-weight: 400;
    font-size: 16px;
    font-family: "Inter";
  }
`;

export const Input = styled.input`
  width: 99%;
  height: 44px;
  border: 1.5px solid #e9ecef;
  border-radius: 4px;
  background-color: white;
  font-weight: 400;
  font-size: 16px;
  font-family: "Inter";
  :hover {
    background-color: var(--grey-8);
  }
  :focus {
    background-color: white;
    outline: none;
  }
  ::placeholder {
    color: var(--grey-3);
    padding-left: 10px;
    font-weight: 400;
    font-size: 16px;
    font-family: "Inter";
  }
`;
