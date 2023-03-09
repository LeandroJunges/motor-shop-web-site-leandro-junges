import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: fit-content;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const Centered = styled.div`
  width: 90%;
  height: fit-content;
  margin-top: 15px;
  margin-bottom: 15px;
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.img`
  border-radius: 100%;
  height: 77px;
  width: 77px;
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

export const Button = styled.button`
  cursor: pointer;
  background-color: var(--grey-0);
  height: 48px;
  width: 206px;
  border-radius: 4px;
  font-size: 16px;
  color: white;
  border: 0;
  font-family: "Inter";
`;
