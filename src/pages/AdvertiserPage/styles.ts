import styled from "styled-components";

export const Container = styled.div`
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

export const OutCarroussel = styled.div`
  height: fit-content;
  width: 100%;
  gap: 63px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
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
`;

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

export const ContainerWpp = styled.div`
  min-width: 4.5rem;
  height: 4.5rem;
  margin-right: 50px;
  border-radius: 100px;
  background : linear-gradient(180deg, #50c571 0%, #50cf9a 100% ) ;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  position: fixed;
  right: 0;
  bottom: 120px;
  left: auto;

  @media(min-width: 768px){
    bottom: 180px;
    left: initial;
  }

`
