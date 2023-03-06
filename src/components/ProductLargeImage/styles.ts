import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
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
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.div`
  font-family: "Lexend";
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

export const Upperdiv = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImgDiv = styled.div`
  width: 100%;
  height: 239px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
`;
