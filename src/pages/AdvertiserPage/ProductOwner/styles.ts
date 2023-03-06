import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  align-items: center;
  border-radius: 4px;
  justify-content: center;
  background-color: white;
`;
export const Centered = styled.div`
  width: calc(100% - 30px);
  height: calc(100% - 35px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1200) {
  }
`;
export const ImgDiv = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const Img = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 100%;
`;
export const NameDiv = styled.div`
  gap: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  height: fit-content;
`;
export const Title = styled.p`
  font-family: "Lexend";
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
`;
export const AnnouDiv = styled.div`
  width: 92px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--brand-4);
  border-radius: 4px;
`;
export const AnnnP = styled.p`
  font-size: 14px;
  font-family: "Inter";
  color: var(--brand-1);
  font-weight: 500;
`;
export const Description = styled.p`
  font-size: 16px;
  font-family: "Inter";
  font-weight: 400;
`;
export const DescDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const ButtonDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const Button = styled.button`
  cursor: pointer;
  background-color: white;
  height: 48px;
  width: 160px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  border: 0;
  border: 1.5px solid var(--brand-1);
  font-family: "Inter";
`;
