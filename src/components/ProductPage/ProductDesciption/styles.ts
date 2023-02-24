import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const UpperDiv = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ImgDiv = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: white;
`;
export const Img = styled.img`
  border-radius: 4px;
  width: 295px;
`;
export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  height: 46%;
`;

export const DescriptionContainerCentered = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  align-items: flex-start;
`;
export const StatsDiv = styled.div`
  width: 100%;
  display: flex;
  height: 35%;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`;

export const UpperStats = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`;

export const UpperStatsInfo = styled.div`
  width: 80px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--brand-4);
`;

export const Stat = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  color: var(--brand-1);
`;

export const Price = styled.p`
  font-family: "Lexend";
  font-weight: 600;
  font-size: 16px;
`;

export const ButtonDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: flex-end;
  border-radius: 4px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: var(--brand-1);
  height: 38px;
  width: 100px;
  border-radius: 4px;
  font-size: 14px;
  color: white;
  border: 0;
  font-family: "Inter";
`;

export const BottomDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  justify-content: center;
`;
export const BottomDivCentered = styled.div`
  width: 90%;
  margin-top: 36px;
  margin-bottom: 36px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
export const Title = styled.p`
  font-family: "Lexend";
  font-weight: 600;
  font-size: 20px;
`;
export const Description = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
`;
