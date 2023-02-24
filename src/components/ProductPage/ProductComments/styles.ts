import styled from "styled-components";

export const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 15px;
  background-color: white;
  width: 90%;
  height: fit-content;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ContainerComment = styled.div`
  height: fit-content;
  width: 90%;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;
export const NameAndDate = styled.div`
  height: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
`;

export const Img = styled.img`
  border-radius: 100%;
  height: 32px;
  width: 32px;
`;

export const TitleDiv = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-start;
`;

export const Title = styled.p`
  font-family: "Lexend";
  font-weight: 600;
  font-size: 20px;
`;

export const Description = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${(props: any) => props.color};
`;

export const DescriptionWeighted = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  color: ${(props: any) => props.color};
`;
