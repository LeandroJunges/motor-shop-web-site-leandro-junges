import styled from "styled-components";

export const Backdrop = styled.div`

  width: 100vw;
  height: 100vh;


  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  width: 310px;
  height: 370px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 4px;
  @media (min-width: 600px) {
    width: 520px;
  }
`;
export const Centered = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const UpperDiv = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MiddleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 25px;
  height: fit-content;
  width: 100%;
`;

export const BottomDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
`;
export const ButtonCancel = styled.button`
  cursor: pointer;
  background-color: var(--grey-6);
  height: 48px;
  width: 126px;
  border-radius: 4px;
  font-size: 16px;
  color: var(--grey-2);
  border: 0;
  font-family: "Inter";
`;

export const ButtonSubmit = styled.button`
  cursor: pointer;
  background-color: var(--alert-2);
  height: 48px;
  width: 211px;
  border-radius: 4px;
  font-size: 16px;
  color: var(--alert-1);
  border: 0;
  font-family: "Inter";
`;

export const Title = styled.p`
  font-family: "Lexend";
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

export const Description = styled.p`
  font-family: "Inter";
  color: var(--grey-2);
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
`;
