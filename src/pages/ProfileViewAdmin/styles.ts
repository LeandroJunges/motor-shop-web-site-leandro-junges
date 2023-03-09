import styled from "styled-components";



export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    var(--brand-1) 20.25%,
    var(--grey-8) 20.26%,
    var(--grey-8) 100%
  );
  gap: 16px;
  position: relative;
  /* justify-content: space-around; */

`
export const LinkBack = styled.button`
  width: 30px;
  height: 30px;
  padding-top: 3px;
  border: none;
  font-size: 14px;
  font-family: "Inter";
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  top: 82px;
  left: 5%;
  background-color: white;
  cursor: pointer;
  position: absolute;
  @media (min-width: 950px) {
    left: 18.5%;
  }
`;

export const UpperDiv = styled.div`
  width: 100%;
  height: 456px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 950px) {
    width: 70%;
  }
`;

export const BottomDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Centered = styled.div`
  width: 90%;
  height: fit-content;
  gap: 52px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CarrAuction = styled.div`
  height: 350px;
  width: 100%;
  overflow-x: auto;
  gap: 12px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.p`
  font-weight: 600;
  font-family: "Lexend";
  font-size: 24px;
  line-height: 30px;
`;

export const Carrossel = styled.div`
  overflow-x: auto;
  gap: 12px;
  display: flex;
  height: fit-content;
  width: 100%;
    .listEmpty {
        width: 100%;
        display: flex;
        justify-content: center;
        
          h1{
            font-size: 24px;
            font-weight: 400;
            padding: 20px;
          }

      }
`;

export const OutCarroussel = styled.div`
  height: fit-content;
  width: 100%;
  gap: 63px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ContainerCarroussel = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

`
export const ContainerButtons = styled.div`
    width: 90%;
    display: flex;
    gap: 20px;
    position: absolute;
    bottom: 20px;
    
    button{
      border-radius: 4px;
      border: 1.5px solid #212529;
      padding: 10px;
      box-sizing: border-box;
      cursor: pointer;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      
    }

`


